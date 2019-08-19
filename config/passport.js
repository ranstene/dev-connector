const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};









// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const mongoose = require("mongoose");

// const Teacher = mongoose.model("users");

// const key = require("./keys").secretOrkey;

// const options = {};

// options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// options.secretOrKey = key;

// module.exports = passport => {
//   passport.use(
//     new JwtStrategy(options, (jwtPayload, done) => {
//       users.findById(jwtPayload._id)
//         .then(users => {
//           if (users) {
//             return done(null, users);
//           } else {
//             return done(null, false);
//           }
//         })
//         .catch(err => console.log(err));
//     })
//   );
// };

// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const mongoose = require('mongoose');
// const User = mongoose.model('users');
// const keys = require('../config/keys');

// const options = {};
// options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// // opts.secretOrKey = keys;
// options.secretOrKey = keys.secretOrKey;

// module.exports = passport => {
//   passport.use(
//     new JwtStrategy(options, (jwt_payload, done) => {
//       User.findById(jwt_payload.id)
//         .then(user => {
//           if (user) {
//             return done(null, user);
//           }
//           return done(null, false);
//         })
//         .catch(err => console.log(err));
//     })
//   );
// };


