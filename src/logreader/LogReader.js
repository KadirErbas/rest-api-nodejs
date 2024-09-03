import fs from 'node:fs';
import express from "express";


const router = express.Router();


// const filePath = './src/logreader/example.log';
const filePath= '/home/sysadmin/http_logs/bank.log';

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

router.get('/filterByDate', (req, res) => {
    const { startDate, endDate } = req.query;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Hata", err);
            return res.status(500).json({ err });
        }

        const lines = data.trim().split('\n');
        const filteredLogs = lines.filter(line => {
            const parts = line.split(' ');
            if (parts.length < 4) return false; // Log formatı hatalıysa filtreleme dışı bırak

            const datePart = parts[1]; // Logdaki tarih kısmını alır
            const logDate = new Date(datePart);

            // Tarih aralığı belirtilmişse bu kontrolü yap
            return startDate && endDate ? (logDate >= new Date(startDate) && logDate <= new Date(endDate)) : true;
        });

        res.status(200).json({ "logs": filteredLogs });
    });

});


export default router;