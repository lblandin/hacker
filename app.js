const express = require('express');
const routes = require('./routes');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());


//Test if database has etablished
try {
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//Routes
app.get('/', routes.form);
app.post('/validation', routes.validation);


app.listen(app.get('port'),()=>{
  console.log("Backend is running on http://localhost:"+app.get('port'))
})