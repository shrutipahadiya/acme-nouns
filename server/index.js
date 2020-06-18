const chalk = require('chalk');
const express = require('express');
const {app,startServer} = require('./api/index');
const {Person,Place,Thing,seed} = require ('./db/index');
const path = require('path');

app.use(express.json());

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../index.html'))
})

app.post('/person',async (req,res) => {
    const {name} = req.body;
    console.log(req)
    console.log(req.body)
    if (typeof name !== 'string') {
        res.status(400).send({
          message: 'Body of request must include a  "name" of type "string".',
        });
      } else {
        const createdPerson = await Person.create({
        name,
        });
    
        res.status(201).send({
          person: createdPerson,
          message: `person ${name} was created successfully!`,
        });
      }
    });



    app.post('/place',async (req,res) => {
        const {name} = req.body;
        console.log(req)
        console.log(req.body)
        if (typeof name !== 'string') {
            res.status(400).send({
              message: 'Body of request must include a  "name" of type "string".',
            });
          } else {
            const createdPlace = await Place.create({
            name,
            });
        
            res.status(201).send({
              place: createdPlace,
              message: `place ${name} was created successfully!`,
            });
          }
        });

        app.post('/thing',async (req,res) => {
            const {name} = req.body;
            console.log(req)
            console.log(req.body)
            if (typeof name !== 'string') {
                res.status(400).send({
                  message: 'Body of request must include a  "name" of type "string".',
                });
              } else {
                const createdThing = await Thing.create({
                name,
                });
            
                res.status(201).send({
                  thing: createdThing,
                  message: `thing ${name} was created successfully!`,
                });
              }
            });


const startApp = () => {
    return seed()
      .then(startServer)
      .then(() => {
        console.log(chalk.greenBright('Application started successfully.'));
      })
      .catch((e) => {
        console.log(chalk.red('Failed to start application.'));
  
        throw e;
      });
  }
  
  startApp();