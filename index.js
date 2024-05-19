const mongoose = require('mongoose');
main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>console.log(err));

async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
});

const User = mongoose.model("User",userSchema);

// const user1 = new User({
//     name:"Adam",
//     age:24,
//     email:"adamyahoo@s.in",
// });   // to insert this in database type node then =>  .load index.js => ctrl+k

// const user2 = new User({
//     name:"Eve",
//     age:22,
//     email:"eveahoo@s.in",
// });   

// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>console.log(err))

// user1.save();   // this will save in database


// to insert many users 

User.insertMany([
    {name:"Tony", age: 30, email: "tony@gmail.com"},
    {name:"Steven", age:29, email: "steven@gmail.com"},
    {name:"Paris" , age: 56, email:"paris@gmail.com"}
]).then((res)=>{console.log(res)});

// make sure to uncomment down all the topics individually


// find operation : its not a promise but still we can use .then

User.find({age:{$gt:29}}).then((res)=>{
    console.log(res)  // or  we can also filter the data which is coming like this console.log(res[0].name) this will give the name
}).catch((err)=>console.log(err));