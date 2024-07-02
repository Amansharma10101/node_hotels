    const mongoose = require('mongoose');

   //const mongoURL = 'process.env.MONGODB_URL_LOCAL'


   const mongoURL = process.env.MONGODB_URL ;
   //'mongodb+srv://amansharma21ash:amangaZab99pass@cluster0.cm47yec.mongodb.net/hotels?retryWrites=true&w=majority&tls=true'




mongoose.connect(mongoURL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })

    const db = mongoose.connection;

    db.on('connected',()=>{
        console.log('connected to mongodb server');
    });

    db.on('error',(err)=>{
        console.log('monggodb connection error:',err);
    });

    db.on('disconnected',()=>{
        console.log('mongodb disconnected');
    });