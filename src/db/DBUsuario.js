import fs from 'node:fs'
import bodyParser from 'body-parser'

export const readData = () =>{
    try{
        const datos = fs.readFileSync('./dbjson/DBUsuario.json');
        return JSON.parse(datos);
    }catch (error){
        console.log(error);
    }
}

export const writeData = (datos) =>{
    try{
        fs.writeFileSync('./dbjson/DBUsuario.json', JSON.stringify(datos));
    }catch (error){
        console.log(error);
    }
}