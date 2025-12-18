const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');



async function signup({ email, password, name }) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const [user] = await knex('users')
    .insert({
      email,
      password_hash: hashedPassword,
      name,
    })
    .returning(['id', 'email', 'name']);

  return user;
}

async function login({ email, password }) {
  const user = await knex('users').where({ email }).first();
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password_hash);
  if (!isValid) return null;

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return {
    user: { id: user.id, email: user.email, name: user.name },
    token,
  };
}

module.exports = { signup, login };
