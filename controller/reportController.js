import fs from 'fs';
import  path from "path";
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import { Banco } from "../model/bank.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const generarReporte = async(req,res) => {

    try{

        const tarjetas = await Banco.find();

        const finalName = uuidv4();

        const path = __dirname + `/../public/${finalName}.txt`;
       
        fs.writeFileSync(path, JSON.stringify(tarjetas));
       
        return res.download(path, `${finalName}.txt`);


    }catch(e){
        return res.status(500).send({
            msg: e
        })
    }
}

export {generarReporte};