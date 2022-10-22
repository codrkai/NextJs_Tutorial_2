import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    title: {type:String, required:true},
    price: {type:String, required:true},
    image: {type:String, required:true},
    description: {type:String, required:true},
    //rating: {type:String, required:true},
    entryDate: {type:Date, default:Date.now},
    category: {type:Schema.Types.ObjectId, ref:'category'},
});

const categorySchema = new Schema({
    name: {type:String, required:true}
});

const Products = mongoose.model('products') || mongoose.model('products', productsSchema, 'products');
const Category = mongoose.model('category') || mongoose.model('category', categorySchema, 'category');
const mySchemas = {'Products':Products, 'Category':Category};

export default mySchemas;