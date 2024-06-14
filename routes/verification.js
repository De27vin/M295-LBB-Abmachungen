const express = require("express");
const session = require("express-session");
const router = express.Router();

const credentials = {
  password: 'm295',
};

// Middleware
router.use(session(
  {
    secret: 'sicherer Schlüssel',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
  }
));

// Nimmt credentials entgegen, überprüft diese und gibt cookie zurück
router.post('/login', (request, response) => {

  const { email, password } = request.body;

  if(!email || !password) {
    return response.status(401).json({ error: "Email oder Passwort fehlt!" });
  }

  if(password === credentials.password) {
    request.session.email = email;
    return response.status(200).json({ email: request.session.email });
  }

  return response.status(401).json({ error: "Email oder Passwort falsch!" });
});

// Überprüft den Cookie auf Gültigkeit und gibt Ergebnis zurück
router.get('/verify', (request, response) => {

  if(request.session.email) {
    return response.status(200).json({email: request.session.email});
  }

  return response.status(401).json({error: "Nicht eingeloggt!"});
});

// Markiert den Cookie als ungültig
router.delete('/logout', (request, response) => {

  if(request.session.email) {

    request.session.destroy(err => {

      if(err) {
        return response.json({error: "Fehler!"});
      }
      return response.status(204).send("Ausgeloggt!");

    });

  } else {
    return response.status(401).json({error: "Nicht eingeloggt!"});
  }
});

module.exports = router;
