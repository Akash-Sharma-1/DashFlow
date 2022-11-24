require('dotenv').config();

const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');



// const sso = require('./api/middleware/sso')
const userRouter = require('./api/jira')



const app = express()

app.enable('trust proxy');
app.use(cookieParser());
app.use(cors());

app.set('port', process.env.PORT || 8080);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use(sso())
//defining APIs
app.use('/api/getJiraIssue', userRouter);


  
// Serve react build files statically
app.use(express.static(path.join(__dirname, './client/build/')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./client/build', 'index.html'));
});




http.createServer(app).listen(app.get('port'), function () {
    console.log('Backend Server running at  ' + app.get('port') + '🐱‍🏍🚀🚀');
});

module.exports = app;
