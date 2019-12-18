const express = require('express'); 
const router = express.Router();

const connectDB = require('./config/db');

const app = express();

//connect database 
connectDB();

app.get('/',(req, res)=>res.send('API RUNNING'));

//api route defined 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth')) ;
app.use('/api/profiles', require('./routes/api/profiles'));
const PORT = process.env.port || 5000 ; 

app.listen(PORT,()=> console.log('server started on port '+ PORT));