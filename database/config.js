import mongoose from "mongoose"


const connectDB = async() => {

    try{

        await mongoose.connect(process.env.MONGO);
        console.log("Base de datos conectada");
    }catch(e){
        throw new Error(e)
    }

}

export {connectDB}