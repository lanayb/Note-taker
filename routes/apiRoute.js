const router = require('express').Router();
const StoreNote = require('../db/storeNote');

router.get('/notes', (req, res) => {
    try{
        StoreNote.getNotes()
        .then((notes) => {
            return res.json(notes);
        });
    } catch(error) {
        res.status(400).json(error);
    }
    
});


router.post('/notes', (req, res) => {
    try {
        StoreNote.newNote(req.body)
        .then((note) => res.json(note));

    } catch(error) {
        res.status(400).json(error);
    }

});

module.exports = router;

