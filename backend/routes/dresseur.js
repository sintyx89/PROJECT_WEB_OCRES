const express = require('express');
const router = express.Router();

const dresseurCtrl = require('../controllers/dresseur');

router.get('/', dresseurCtrl.getAllStuff);
router.post('/', dresseurCtrl.createThing);
router.get('/:id', dresseurCtrl.getOneThing);
router.put('/:id', dresseurCtrl.modifyThing);
router.delete('/:id', dresseurCtrl.deleteThing);

module.exports = router;