 
import mongoose from 'mongoose';
const Connection = ( ) => {
    const CONNECTION_URL = 'mongodb+srv://aayushsug20cse:aayushs123@cluster0.bq21pkk.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(CONNECTION_URL , (err)=>{
       if(err) 
       {
        console.log('unable to connect to the server:');
        console.log(err);
       }
       else
       console.log('MangoDB connected');
    })
    
}

export default Connection;