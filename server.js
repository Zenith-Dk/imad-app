var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title: 'Article-One | Joseph',
        heading : 'Article One',
        date : 'July 23, 2017',
        content : `
                    <p>
                        This is my first aticle on IMAD.This is my first aticle on IMAD.This is my first aticle on IMAD.
                        This is my first aticle on IMAD.This is my first aticle on IMAD.This is my first aticle on IMAD.
                    </p>
                    <p>
                        This is my first aticle on IMAD.This is my first aticle on IMAD.This is my first aticle on IMAD.
                        This is my first aticle on IMAD.This is my first aticle on IMAD.This is my first aticle on IMAD.
                    </p>
                    <p>
                        This is my first aticle on IMAD.This is my first aticle on IMAD.This is my first aticle on IMAD.
                        This is my first aticle on IMAD.This is my first aticle on IMAD.This is my first aticle on IMAD.
                    </p> `
        },
    'article-two':{
        title: 'Article-Two | Joseph',
        heading : 'Article TWO',
        date : 'July 26, 2017',
        content : `
                    <p>
                        This is my second aticle on IMAD. Kindly give your feedback
                    </p>`    
    },
    'article-three':{
        title: 'Article-Three | Joseph',
        heading : 'Article Three',
        date : 'July 27, 2017',
        content : `
                    <p>
                        This is my third aticle on IMAD. Kindly give your feedback
                    </p> `     
         }
};
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate = ` 
<html>
    <head>
        <title>
            ${title}
        </title>    
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>    
    <body>
        <div class ="container">
            <div>
                <a href="/">Home</a>    
            </div>
            <div>
            <hr>
            <h3>
               ${heading}
            </h3>    
            <div>
                ${date}
            </div>
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>    
</html>
`
;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
    // aarticleName == article-one
    //articles[articleName] = { } content objec for article one
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
