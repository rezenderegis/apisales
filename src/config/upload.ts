import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
//Increase two levels 
const uploadFolder = path.resolve(__dirname,'..', '..', 'uploads');

export default {

    diretory: uploadFolder, 
    storage: multer.diskStorage({
        destination: uploadFolder,
        
        //How define file name
        filename(request, file, callback) {

            //Creating hash to store file. 
            const fileHash = crypto.randomBytes(10).toString('hex');

            const filename = `${fileHash}=${file.originalname}`;

            callback(null,filename);
            
        }
    })


}