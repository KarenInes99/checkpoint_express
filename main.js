const express = require('express');
const app = express();

// Middleware pour vérifier l'heure de la demande
const checkRequestTime = (req, res, next) => {
  const date = new Date();
  const day = date.getDay(); // 0 (dimanche) à 6 (samedi)
  const hour = date.getHours();


  app.use(express.static('public'));

  // Vérifier si c'est un jour ouvrable (du lundi au vendredi) et si c'est entre 9h et 17h
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // Continuez vers la route demandée
  } else {
    res.status(403).send('Désolé, l\'application n\'est disponible que pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h).');
  }
};

// Utilisation du middleware pour toutes les routes
app.use(checkRequestTime);

// creation des routes 
app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div class="header">
        <h1>Bienvenue sur notre site</h1>
      </div>
      <div class="container">
        <p>Explorez nos services ou contactez-nous pour en savoir plus.</p>
      </div>
    </body>
  </html>
`);
});

app.get('/services', (req, res) => {
  res.send(`
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div class="header">
        <h1>Nos Services</h1>
      </div>
      <div class="container">
        <div class="services">
          <div class="service-item">
            <h3>Services de Consultation en Développement Personnel</h3>
            <p>Nous sommes déterminés à vous accompagner dans votre cheminement vers une vie plus épanouie et équilibrée. Contactez-nous dès aujourd'hui pour commencer votre voyage vers une croissance personnelle significative.</p>
          </div>
          <div class="service-item">
            <h3>Services de Marketing Digital</h3>
            <p>Contactez-nous dès aujourd'hui pour discuter de la manière dont nos services de marketing digital peuvent propulser votre entreprise vers le succès en ligne.</p>
          </div>
          <div class="service-item">
            <h3>Services de Design d'Intérieur</h3>
            <p>Notre équipe de designers d'intérieur passionnés est là pour donner vie à vos espaces. Nous commençons par des consultations approfondies pour comprendre vos besoins, vos goûts et votre style de vie. Ensuite, nous élaborons des concepts sur mesure qui transforment vos idées en espaces magnifiquement conçus.</p>
          </div>
          
        </div>
      </div>
    </body>
  </html>
`);
});

app.get('/contact', (req, res) => {
  res.send(`
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div class="header">
        <h1>Contactez-nous</h1>
      </div>
      <div class="container">
        <div class="contact-form">
          <form>
            <div class="form-group">
              <label for="name">Nom :</label>
              <input type="text" id="name" name="name" placeholder="Votre nom">
            </div>
            <div class="form-group">
              <label for="email">Email :</label>
              <input type="email" id="email" name="email" placeholder="Votre email">
            </div>
            <div class="form-group">
              <label for="message">Message :</label>
              <textarea id="message" name="message" placeholder="Votre message"></textarea>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </body>
  </html>
`);
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Le serveur est en cours d\'exécution sur le port 3000...');
});
