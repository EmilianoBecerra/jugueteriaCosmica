import ProductModel from "./productModel.js";

export const getAll = async(req,res)=>{
    const match = req.query ?? {}
    try{
        const products = await ProductModel.find(match)
        res.json(products || {});
    }
    catch(e){
        res.json(e);
    }
}


export const getId = async (req, res)=>{
    const {id} = req.params;
   
    try{
        const product = await ProductModel.findOne({id});
        res.json(product ?? {})
    }
    catch(e){
        res.status(500).json({e, errMSg: "Error en los datos de búsqueda"});
    }
}


export const addProduct = async (req,res)=>{

    const body= {
        "id":req.body.idNumber,
        "nombre": req.body.nombre,
        "marca": req.body.marca,
        "precio": req.body.precio,
        "stock": req.body.stock,
        "categoria": req.body.categoria,
        "descripcion": req.body.descripcion,
        "imagen": req.file.filename
    }
    const obectBody = body

    try{
       const product = ProductModel.create(obectBody)
        res.json(product || {})
    }
    catch(e){
        res.status(400).json({e, errMSg: "Los datos ingresados para crear el producto no son correctos"})
    }
}



export const update = async (req,res)=>{
    const {id} = req.params;
    const {body} = req;
    try{
        const response = await ProductModel.findOneAndUpdate({id:id}, body, {new:true});
        res.json(response);
    }
    catch(e){
        res.status(500).json({e,errMSg: "Error en los datos ingresados para modificar"});
    }
}


export const deleteOne = async (req,res)=>{
    const id = req.params;
    try{
        const product = await ProductModel.deleteOne({id:id});
        res.json({delete: !!product.deletedCount})
    }
    catch(e){
        res.status(500).json({e, errMSg: "Error en los datos de búsqueda del producto a eliminar"})
    }
    
}
