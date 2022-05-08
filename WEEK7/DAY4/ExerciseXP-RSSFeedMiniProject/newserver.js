const express = require('express');
const app = express();

let Parser = require('rss-parser');
let parser = new Parser();

const rss = 'https://www.thefactsite.com/feed/';

app.use('/',express.static(__dirname+'/views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine','ejs');

app.listen(5001, ()=>{
    console.log(`listening on port 5001`);
})

const getFeed = async () => {
    return feed = await parser.parseURL(rss);
};

app.get('/',(req,res)=>{
    let feed = getFeed()
    .then(feed=>{
        res.render('pages/index',{data:feed.items})
    })
    .catch(err => {
        console.log(err);
        res.json({message:err.message});
    })
})

app.get('/search',(req,res)=>{
    res.render('pages/search',{data:''})
});

app.post('/search/title',(req,res)=>{
    const title = req.body.title;
    let selectedPosts = [];
    let feed = getFeed()
        .then(feed => feed.items.forEach(item=>
        item.title.toLowerCase().includes(title.toLowerCase()) ? selectedPosts.push(item):{}))
        .then(()=>{
            res.render('pages/search',{data:selectedPosts});
        })
        .catch(err => {
            console.log(err);
            res.json({message:err.message});
        })
});

app.post('/search/category',(req,res)=>{
    const cat = req.body.category;
    let selectedPosts = [];
    let feed = getFeed()
        .then(feed => feed.items.forEach(item=>(
        item.categories.forEach(category=>
            category.toLowerCase().includes(cat.toLowerCase()) ? selectedPosts.push(item):{}))))
        .then(()=>res.render('pages/search',{data:selectedPosts}))
        .catch(err => {
            console.log(err);
            res.json({message:err.message});
        })
});

