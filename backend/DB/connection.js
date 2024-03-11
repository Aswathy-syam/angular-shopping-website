const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log('drop cart server successfully to mongodb atlas');
}).catch(()=>{
    console.log(`mongodb connection failed error:${err}`);
})