//Setting Variables

const express = require("express");
const app = express();
const port = 3000;

//Require

const budget = require('./models/budget.js');

// CREATE STATIC STYLE

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'))

//Verify Server is listening

app.listen(3000,function(){
    console.log(`listening`);
})

//INDEX ROUTE

app.get("/budget/", (req, res) => {
  
    res.send(budget);
});

  // NEW INDEX ROUTE

  app.get("/budget:/id", (req, res) => { 
      
    res.render('index.ejs', {
        allBudget:budget
    });
    });

   // NEW SHOW ROUTE 

 app.get('/budget/:indexOfBudgetArray', (req, res)=>{
     res.render('show.ejs');
 })
   
   




