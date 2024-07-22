const jwt = require('jsonwebtoken');
const db = require('../config/nedb');
const bcrypt = require('bcrypt');
require('dotenv').config();

const generateAuthToken = async () => {
  try {
    const payload = { id : process.env.USERID };
    const secret = process.env.JWT_SECRET;

    const options = { expiresIn: '100h' }; 

    return jwt.sign(payload, secret, options);
  } catch (error) {
    console.error('Error generating token:', error); 
    throw error; 
  }
};


const validateAuthToken = (token) => {
  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    console.error('Error validating token:', error); 
    return null;
  }
};

const createSession = async (user) => {
  const token = await generateAuthToken(user);
  return { token };
};

async function authenticateUser(id, password) {
  if (id == process.env.USERID && password == process.env.PASSWORD) {
    return true;
  }else{
    return false;
  }
}

module.exports = {
  createSession,
  validateAuthToken,
  authenticateUser,
};
