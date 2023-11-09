import JWT from "jsonwebtoken";

const secret = "$uperMan@123";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    fullname:user.fullname,
    email: user.email,
  };
  const token = JWT.sign(payload, secret);
  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secret);
  return payload;
}

module.exports = {
  createTokenForUser,
  validateToken,
};
