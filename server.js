const express = require('express')
const app = express();
require('dotenv').config();
const db = require('./db');



const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/',function (req,res){
    res.send('welcome to my hotel... how i can help you ? we have menu..')
})





// app.get('/dosa',(req,res)=>{
//     res.send('sure sir, i would love to serve dosa')
// })

// app.get('/idli',(req,res)=>{
//     var customized_idli = {
//         name: 'rava idli',
//         size: '10 cm diameter',
//         is_sambhar: true,
//         is_chutney: false
//     }
//     res.send(customized_idli)
// })

// app.post('/items',(req,res)=>{
//     res.send('data is saved ');
// })


const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);


app.listen(3000,()=>{
    console.log('listening....on port 3000');
})