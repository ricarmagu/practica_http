const express = require('express');
const router = express.Router();
const personSchema = require('../models/personquiz_models');

/* Creación de un recurso */
router.post('/person', (req,res) => {
    const person = personSchema(req.body);
    person
    .save()
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        res.json({ message: error });
    });
});

/* Listar todos los recursos */
router.get('/', (req,res) => {
    personSchema.find()
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        res.json({ message: error });
    });
}); 

/* Consultar un recurso especificio */
router.get('/:personId', (req, res) => {
    const {personId} = req.params
    personSchema.findById(personId)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        res.json({ message: error });
    });
});

/* Editar un recurso especifico */
router.put('/:personId', (req, res) => {
    const { personId } = req.params;
    const updateValue = req.body;
    personSchema
    .updateOne({_id: personId}, { $set: updateValue})
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        res.json({ message: error });
    });
});

/* Elimina un recurso especifico */
router.delete('/:personId', (req,res) => {
    const { personId } = req.params;
    personSchema.remove({_id:personId})
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        res.json({ message: error });
    });
}); 



module.exports = router;