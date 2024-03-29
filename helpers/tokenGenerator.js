import jwt from "jsonwebtoken";


const generateToken = (idUsuario) => {

    return new Promise((resolve, reject) => {
        const payload = {idUsuario};

        jwt.sign(payload, process.env.TOKENFIRM, { expiresIn: '24h'} , (err, token) => {
            if(err){
                reject('No se genero el token');
            }
            resolve(token);
        });

    })

}

export {generateToken}