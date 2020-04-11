
const express= require('express');
//declareer en breng naar buiten "exports"
const app = express();
const morgan =require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const {PASSWORD} = require('./config');

mongoose.connect('mongodb+srv://11800462:'+ process.env.PASSWORD +'@rest-vkizk.mongodb.net/test?retryWrites=true&w=majority',
    {
    //useMongoClient: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
    }
);
mongoose.Promise = global.Promise;
//give the logs of activities
app.use(morgan('dev'));
//simple url
app.use(bodyParser.urlencoded({extended: false}));
//extract json data
app.use(bodyParser.json());

app.use((req, res, next) => {
    // star= give acces to any client
    res.header('Access-Control-Allow-Origin', '*');
    // star is possible
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
    



//routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) =>{
    const error = new Error('Not found');
    error.status= 404;
    //forwards 404 instead of the original
    next(error);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports=app;