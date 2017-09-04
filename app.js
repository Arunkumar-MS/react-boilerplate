import express from 'express';
const app = express();
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.listen(4000);
console.log('runing @ 4000');
app.get('/', function(req, res) {
    res.render('index.html');
});
