
// password encrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.checkPassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

exports.hashPassword = (password) => {
    return bcrypt.hash(password, saltRounds);
}
