// models
const Thing = require('./models/thing');
// Express
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// MangoDB
const connect = 'mongodb+srv://dresseur:ocres@cluster0.6ipr7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoose = require('mongoose');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const desseurRoutes = require('./routes/dresseur');

var app = express();

// MangoDB
mongoose.connect(connect,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/api/dresseur', desseurRoutes);




/*
// Acces à l'API depuis n'importe quelle origine
app.use('/api/dresseur', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
*/
/*
// GET
app.get('/api/dresseur', (req, res, next) => {
    // MangoDB
    /*
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
    */
   // Dans le code
   /*
    const dresseur = [
      {
        _id: '1',
        name: 'MENGONI',
        first_name : 'Margaux',
        birth_date : '07/04/1998',
        nbr_badge : '4',
      },
      {
        _id: '2',
        name: 'LEBON',
        first_name : 'Nicolas',
        birth_date : '26/05/2000',
        nbr_badge : '6',
      },
    ];
    res.status(200).json(dresseur);
  });
*/
/*
//GET by ID
app.get('/api/dresseur/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  });
*/
/*
// POST
app.post('/api/dresseur', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});
*/
/*
// PUT
app.put('/api/dresseur/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });
*/
/*
// DELETE
app.delete('/api/dresseur/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });
*/

module.exports = app;
