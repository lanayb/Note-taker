const fs = require('fs');
// const uuidv1 = require('uuid/v1');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class StoreNote {
    read(){
        return readFile('db/db.json', 'utf8');
    }

    write(note) {
        return writeFile('db/db.json', JSON.stringify(note));
    }

    getNotes(){
        return this.read().then ((notes) => {
            var parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (error) {
                parsedNotes = [];
            }

            return parsedNotes;
        });
    }

    newNote(note) {
        const  { text } = note;

        if(!text){
            console.log('please add text');
        }

        const NewNote = { text, id: uuidv1() };

        return this.getNotes()
            .then((notes) => [...notes, NewNote])
            .then((updateNote) => this.write(updateNote))
            .then(() => this.NewNote)
            .catch((err) => (err));

    }

        // const newNote = { text, id: uuidv1() }
       


}



module.exports = StoreNote;

