import { connect } from "mongoose";

const connectDB=(DB)=>{
    const options={
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
    connect(DB,options)
    .then(()=>{
        console.log('connection successful');
    })
    .catch((err)=>{
        console.log('error aya hai');
        console.log(err);
    })
};

export default connectDB;