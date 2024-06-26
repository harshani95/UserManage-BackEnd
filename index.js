const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const port = process.env.SERVER_PORT | 3000;
const app = express();
app.use(cors())

//-----------------------
const userRoute = require('./routes/UserRoute');
const authRoute = require('./routes/AuthRoute');

//-----------------------

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
try {
    mongoose.connect('mongodb://127.0.0.1:27017/user_manage');
    app.listen(port, () => {
        console.log(`server Started & running on port ${port}`);
    })
} catch (e) {
    console.log(e);
}

app.get('/test-api', (req, resp) => {
    return resp.json({ 'message': 'Server Started!' })
})

//------------
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
