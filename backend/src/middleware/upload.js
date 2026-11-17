const multer=require('multer')
const path=require('path')

const storage =multer.diskStorage({ // spremanje i generiranje imena datoteke
    destination:(req, file, cb)=> {cb(null, 'uploads/');

    }, filename: (req, file, cb)=>{
        const uniqueSuffix= Date.now()+'-'+ Math.round(Math.random()*1E9);
        cb(null, uniqueSuffix+ path.extname(file.originalname));
    }
});

const fileFilter =(req, file, cb)=>{
    if (file.mimetype === 'application/pdf'){
        cb(null, true);
    } else{
        cb(new Error('Datoteka mora biti u PDF formatu!'), false);
    }
};

const upload = multer({
    storage: storage,
    limits:{fileSize: 10*1024*1024},
    fileFilter: fileFilter
});
module.exports= upload;