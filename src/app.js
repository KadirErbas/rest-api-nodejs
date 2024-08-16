import express from "express";
import userRoutes from "./routes/UserRoutes.js";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import User from "./models/user.js"

const app = express();

dotenv.config();
const port = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    console.log("veritabanı  bağlanıldı.");
     
    await User.sync({ force: true });
    console.log("User tablosu başarılıyla oluşturuldu.");
    
  } catch (error) {
      console.error("Tablo oluşturulamadı: ", error);
  } finally {
      await sequelize.close();
  }
})();

/*
sequelize.sync()
  .then(() => console.log('veri tabanı senkronize edildi'))
  .catch(err => console.error('Senkronizasyon hatası:', err));

  */


  
// Use the user routes
app.use('/api', userRoutes);


app.listen(port, () => {
    console.log(`Server running on 10.150.238.233:${port}`);
});
