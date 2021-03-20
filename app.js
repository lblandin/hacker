// // CONF
// const express = require ('express')
// const fs = require('fs')
// const app = express()

// //DB CONNECTION 
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }


// // START PROJECT ON FORM
// // NOT WORK WELL
// app.get('/', (req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile('form.html');
// });


// app.listen(3000, () => {
//     console.log(`Backend is running on http://localhost:3000`)
//   })


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