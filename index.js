import express from "express";
import mongoose from "mongoose";
import user from './routes/userRoutes.js'
import mobile from './routes/mobileRouter.js'

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use('/user', user )
app.use('/mobile', mobile )

// %40 for @ in password
const URI = "mongodb+srv://subhrabose42:Subhra%4016@cluster0.rwyd7zm.mongodb.net/";
const port = process.env.PORT || 5000;
mongoose.connect(URI).then(() => {
  app.listen(port, async () => {
    console.log(`"connected to mongo successfully on port "+${port}`);
  });
}).catch((error)=>{
    console.log(error.message);
})
