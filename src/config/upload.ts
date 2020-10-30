import path from 'path';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname,'..','..','temp');

export default{
    directory:tmpFolder,

    storage:multer.diskStorage({
        destination:tmpFolder,
        filename(request,file,callback){            
            const {matricula,nome} = request.body; 
            const fileName = `${matricula}`+'.jpg';

            return callback(null,fileName);
        }
    }),
}