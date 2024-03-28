import  express  from "express";
import cors from 'cors';
import { userRouter } from "../routes/userRoutes.js";

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
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
        this.app.use("/user", userRouter)
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el http://localhost:${this.port}/`);
        });
    }
    

}

export {Server}