//Setting Variables

const express = require("express");
const app = express();
const port = 3000;

//Require

const budgets = require('./models/budgets.js');

// CREATE STATIC STYLE

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'))

//Verify Server is listening

app.listen(3000,function(){
    console.log(`listening`);
})

//INDEX ROUTE

app.get('/', (req, res) => {
    res.send(budgets);
  });

  //New Budget Route 

  app.get('/budgets', (req, res) => {
    res.render(
        'index.ejs',
        {
            allBudget:budgets
        }
    );
  });

  // NEW INDEX ROUTE

  app.get("/budgets:/id", (req, res) => { 
      
    res.render('index.ejs', {
        allBudget:budget
    });
    });

   // NEW SHOW ROUTE 

 app.get('/budgets/:indexOfBudgetArray', (req, res)=>{
     res.render('show.ejs');
 })
   
   

// this is a test


