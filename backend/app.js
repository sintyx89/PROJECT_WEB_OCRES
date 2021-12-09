var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Acces à l'API depuis n'importe quelle origine
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/stuff', (req, res, next) => {
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

module.exports = app;
