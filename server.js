// require packages for Express

const { name } = require('ejs');
const express = require('express');

const app = express();


//set port to a variable

const port = 3000;

//Exported drinks data 

const budgets = require('./models/budgets.js');

//Middleware

app.use(express.urlencoded({extended: false}));

//Root Route 

app.get('/', (req, res) => {
    res.send(budgets);
});

// Index Route
app.get('/budgets/', (req, res) => {
    res.render(
        'index.ejs',
        {
            allBudgets:budgets
        }
    );
  });

// NEW ROUTE
app.get('/budgets/new', (req, res) => {
  res.render('new.ejs');
});

// CREATE ROUTE
  app.post('/budgets', (req, res)=>{
    budgets.push(req.body);
    res.redirect('/budgets');
  });


   // SHOW ROUTE 
   
  app.get('/budgets:indexOfBudgetsArray', (req, res)=>{
    res.render('show.ejs', {
      budgets: budgets[req.params.indexOfBudgetsArray]
    });
  });

app.listen(3000, () =>{
  console.log('listening');
});

