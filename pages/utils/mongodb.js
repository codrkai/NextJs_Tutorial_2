import mongoose from 'mongoose'

const connectMongoDB = async() => {
    await mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then( () => {
        console.log('DB Connected!');
    })
    .catch( (err) => {
        console.log(err);
    });
}

export default connectMongoDB;