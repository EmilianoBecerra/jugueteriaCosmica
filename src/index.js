import * as dotenv from 'dotenv';
import express from "express";
import {create} from "express-handlebars";
import mongoose from "mongoose";
import PrincipalRouter from "./Routers/Router.js";
dotenv.config();



mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://EmilianobBootcamp:${process.env.DB_PASS}@emibootcamp.jgsjmxm.mongodb.net/ejercicioFase3?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const hbs = create({
    extname: ".hbs"
})

const app = express();

app.use(express.json());



app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(express.static(process.env.PUBLIC_ROUTE));



app.use(PrincipalRouter);

app.get("*", (req,res)=>{
    res.render("index", {layout: false})

})



app.listen(process.env.PORT_SERVER);