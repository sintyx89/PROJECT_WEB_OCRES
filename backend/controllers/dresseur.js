const Thing = require('../models/thing');

exports.createThing = (req, res, next) => {
  const thing = new Thing({
    name: req.body.name,
    first_name: req.body.first_name,
    nbr_badge: req.body.nbr_badge,
    birth_date: req.body.birth_date
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneThing = (req, res, next) => {
    Thing.findOne({
      first_name: req.params.id
    }).then(
      (thing) => {
        res.status(200).json(thing);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.modifyThing = (req, res, next) => {
    const thing = new Thing({
        name: req.body.name,
        first_name: req.body.first_name,
        nbr_badge: req.body.nbr_badge,
        birth_date: req.body.birth_date
    });
    Thing.updateOne({_id: req.params.id}, thing).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({first_name: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  exports.getAllStuff = (req, res, next) => {
    Thing.find().then(
      (things) => {
        res.status(200).json(things);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };