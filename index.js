var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')

const app=express()

app.use(bodyParser.json())
 app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/users',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;

db.on('error',()=>console.log('error in connecting db'))
db.once('open',()=>console.log('connected db'))

app.post('/sign_up',(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let phone=req.body.phone;
    let password=req.body.password;

    var data={
        "name":name,
        "email":email,
        "phone":phone,
        "password":password,
    }

    db.collection('user').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log('inserted successfully');
    })
    return res.redirect('dashboard.html')
})

app.get('/',(req,res)=>{
    res.set({
        'Allow-access-Allow-Origin':'*'
    })
    return res.redirect('index.html')
})

app.listen(3000,(req,res)=>{
    console.log('on port',3000);
    
})