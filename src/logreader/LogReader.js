import fs from 'node:fs';
import express from "express";


const router = express.Router();


const filePath= '/home/sysadmin/logs/bank_application.log';
// docker volume

router.get('/', (req, res) => {
    res.status(200).json({"info":"loglar hoşgeldiniz!"});
});

router.get('/last/:num', (req, res) => {
    const num = parseInt(req.params.num);
    console.log("numara: "+num);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err){
            console.error("hata", err);
            res.status(500).json({err})
        }else{
            const lines = data.trim().split('\n');

            const selectedLogs = lines.slice(-num);
            console.log(selectedLogs);
            res.status(200).json({"logs": selectedLogs});
        }
    }); 
});


export default router;