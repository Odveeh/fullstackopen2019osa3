const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
require('dotenv').config()


const password = process.env.DBPASSWORD
//console.log("password env: ", password);

const url = `mongodb+srv://odveeh99:${password}@cluster0-aqgau.mongodb.net/test?retryWrites=true&w=majority`

console.log("connectin to", url);



mongoose.connect(url, {useNewUrlParser: true})
    .then(result =>{
        console.log("conntecxted to mongoDB");
    })
    .catch((error) => {
        console.log("error connecting to mongodb!: ", error.message);

    })

const personSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, minlength: 3},
    number: {type: String, required: true, unique: true, minlength: 8}
})




personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Person', personSchema);
personSchema.plugin(uniqueValidator);

/*

const Person =  mongoose.model('Person', personSchema);

console.log("arg lengrth: ", process.argv.length)

console.log("pwPrint", process.argv[2]);
const password = process.argv[2];

//jos vain salasana argumenttina:
if(process.argv.length < 4){
    
    Person.find({}).then(persons => {
        //console.log("persons:", persons);
        const tiedot = persons.map(person => [person.name, person.number])
        //console.log("nimet: ", tiedot);
        
        console.log("phonebook: ");
        for(let i = 0; i < tiedot.length; i++){
            console.log(tiedot[i][0], tiedot[i][1]);
        }
        mongoose.connection.close();
    })



    //process.exit(1)

//jos argumentteina salasana + nimi + puhelinnumero: length == 5
} else if(process.argv.length === 5) {

    console.log("nameprint:", process.argv[3]);
    const name = process.argv[3].toString();

    console.log("numberpriont", process.argv[4]);
    const number = process.argv[4].toString();


    const person = new Person({
        name: name,
        number: number,
        id: 666       
    })
    
    person.save().then(response => {
        console.log('note saved, yo!');
        console.log(`added ${name} ${number} to phonebook`)
        mongoose.connection.close();
    })
}

*/