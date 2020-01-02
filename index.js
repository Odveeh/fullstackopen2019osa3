require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
//console.log("hello wadsadsads");
const Person = require('./models/mongo.js')




const app = express();

morgan.token('type', function (req, res) { return req.headers['content-type'] })
morgan.token('uusi', function (req, res) { return "adsadsads" })
morgan.token('contentt', function (req, res) { return JSON.stringify(req.body)})


morgan(function something(tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      token.req(req, res, 'body'),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  })

const errorHandleri = (error, request, response, next) => {
    console.error("seuraava error message t. errorhandleri: ", error.message);

    if(error.name === 'CastError' && error.kind == 'ObjectId') {
        return response.status(400).send({error: 'malformatted id, t. errorhandler'});

    } else if (error.name == 'ValidationError'){
        console.log("validation error lul");
        return response.status(400).json({error: error.message})
    }
    next(error)
}



app.use(cors())
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :contentt'));
app.use(express.static('build'))




let persons = [  
    {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
    },
    {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
    },
    {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
    },

    {
    "name": "Daniel Abramov",
    "number": "123-43-234345",
    "id": 4
    }
    
]

console.log("new app version!");

app.get('/', (req, res) => {

    res.send('<h1> Hello adsads!! </h1>')

})

app.get('/info', (req, res) => {

    let date = new Date();

    Person.find({})
    .then(personlist => {
        console.log("how many items in persons?: ", personlist.length)
        res.send(`<div> Phonebook has info for ${personlist.length} people  </div> <div> ${date} </div>`)

    })

    

})

app.get('/api/persons', (req, res) => {

    let result;

    Person.find({})
        .then(persons1 => {
            //console.log("persons: ", persons1);
            result = persons1;
            console.log("reuslt: ", result);
            res.json(result)
        })

    

})

app.post('/api/persons', (req, res, next) => {
    
    //const person = req.body;
    //console.log("person: ", req.body);

    //const randN = Math.floor(Math.random() * (1000 - 1) + 1);
    //console.log("id random: ", randN);
   
    //person.id = randN;

    const name = req.body.name;
    const number = req.body.number;

    //const nameList = persons.map(person => person.name);
    //const includes = nameList.includes(person.name);

    //console.log("namelist: ", nameList);
    //console.log("includes: ", includes);

    if(name === ''){
        console.log("name missing");
        res.status(400).send({ error: 'name is missing from req content!' });
    } else if (number === ''){
        console.log("number is missing");
        res.status(400).send({ error: 'number is missing from req content!' });
    }
    /*
    else if (includes){
        console.log("nimi on jo listoilla!");
        res.status(400).send({ error: 'name is alreayd in the phonebook' });
        }
        */
     else {
        console.log("adding a person...");
       
        const person = new Person({
            name: req.body.name,
            number: req.body.number,
        })

        person.save()
            .then(savedPerson => {
                res.json(savedPerson.toJSON())
            })
            .catch(error => next(error))

        /*
        persons = persons.concat(person);
        res.status(200)
        res.json(person)
        */
    }
    
    //console.log("persons: ", persons)

    

})

app.get('/api/persons/:id', (req, res, next) => {

    /*
    console.log("id: ", req.params.id);
    requestedPerson = persons.filter(person => person.id == req.params.id);
    console.log("requested person: ", requestedPerson)
    */

    Person.findById(req.params.id)
        .then(person => {
            if(person){
                res.json(person.toJSON())
            } else {
                res.status(404).send({error: 'no match'});
                console.log("right format but no match!")
            }
            
        })
        .catch(error => next(error))

        /*
    if(requestedPerson.length != 0){
        res.json(requestedPerson);
    } else {
        res.status(404).send({ error: 'unknown endpoint' });
        
    }
    */
})

app.delete('/api/persons/:id', (req, res) => {
     console.log("deleting id: ", req.params.id)
     console.log("req params:", typeof req.params.id.toString(), "persons.id",typeof persons[0].id.toString())
     persons = persons.filter(person => person.id.toString() !== req.params.id.toString())

    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))

     

})

app.put('/api/persons/:id', (req, res, next) => {

    console.log("updating data, PUT REQUEST");
    const body = req.body;

    const person = {
        name: body.name,
        number: body.number
    }

    console.log("put req id: ", req.params.id);

    Person.findByIdAndUpdate(req.params.id, person,{new: true})
        .then(updatedPerson => {
            res.json(updatedPerson.toJSON());
        })
        .catch(error => next(error));

})

app.use(errorHandleri);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})