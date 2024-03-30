import { Banco } from "../model/bank.js"


const getInformacion = async(req, res) => {

    try{
        const informacionBancaria = await Banco.find().populate('movimientos');

        return res.json({
            informacionBancaria
        })
        
    }catch(e){
        return res.status(500).send({
            e
        })
    }
    
}


export {getInformacion}