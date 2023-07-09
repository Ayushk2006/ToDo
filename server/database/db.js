  
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const Connection = ( ) => {
     
     
    mongoose.connect(process.env.CONNECTION_URL , (err)=>{
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
