import  express  from "express";
import cors from 'cors';
import { userRouter } from "../routes/userRoutes.js";
import { connectDB } from "../database/config.js";
import { bankRouter } from "../routes/bankRoutes.js";
import { loginRouter } from "../routes/loginRoutes.js";
import { reportRoutes } from "../routes/reportRoutes.js";

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.connection();
        this.middlewares();
        this.routes();
    }

    async connection(){

        try{
            await connectDB();
        }catch(e){
            console.log(e);
        }
       
    }


  
    middlewares(){
        //APLICA EL CORS
        this.app.use(cors());
        
        //PERMITE RECIBIR Y MANDAR EN JSON
        this.app.use(express.json());

        //REFERENCIA A CARPETA PUBLIC
        this.app.use(express.static("public"));

    }

    routes(){
        this.app.use("/user", userRouter);
        this.app.use("/card", bankRouter);
        this.app.use("/login", loginRouter);
        this.app.use("/report", reportRoutes);
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el http://localhost:${this.port}/`);
        });
    }
    

}

export {Server}