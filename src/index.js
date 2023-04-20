import * as dotenv from 'dotenv';
import express from "express";
import {create} from "express-handlebars";
import mongoose from "mongoose";
import PrincipalRouter from "./Routers/Router.js";
dotenv.config();

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLOUD}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const hbs = create({
    extname: ".hbs"
})

const app = express();





app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(express.static("./public"));


app.use(express.json());

app.use(PrincipalRouter);

app.get("*", (req,res)=>{
    res.render("index", {layout: false})

})



app.listen(process.env.PORT || 3000);