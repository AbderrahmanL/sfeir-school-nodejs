const { scrypt } = require("crypto");

const LocalStrategy = require("passport-local").Strategy;

const log = require("../logger")();

const { SALT } = process.env;

const findUser = db => (username, password, done) => {
  scrypt(password, SALT, 64, (err, derivedKey) => {
    if (err) {
      log.error({ err }, "Failed to generate password");
      err.statusCode = 401;
      done(err);
    } else {
      db.createIndex({
        index: {
          fields: ["username", "password"]
        }
      }).then(
        db.find(
          {
            selector: {
              username,
              password: derivedKey.toString("hex")
            }
          },
          (err, result) => {
            if (err) {
              return done(err);
            }
            if (!result.docs) {
              return done(null, false, { message: "Incorrect username." });
            }

            return done(null, result.docs[0]);
          }
        )
      );
    }
  });
};

module.exports = db => {
  return new LocalStrategy(findUser(db));
};
