// require packages for Express

const { name } = require('ejs');
const express = require('express');

const app = express();


//set port to a variable

const port = 3000;

//Exported drinks data 

const budgets = require('./models/budgets.js');

//Get Index 

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

  // NEW
app.get("/budgets/new", (req, res) => {
  res.render('new.ejs');
});

   // NEW SHOW ROUTE 
   
  app.get('/budgets:indexOfBudgetsArray', (req, res)=>{
    res.render('show.ejs', {
      budgets: budgets[req.params.indexOfBudgetsArray]
    });
  });

app.listen(3000, () =>{
  console.log('listening');
});

