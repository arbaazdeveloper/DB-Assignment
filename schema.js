const mongoose = require('mongoose');
mongoose.connect('database:path').then(() => console.log('databse connected')).catch((err) => console.log(err));

//product_category schema
const productCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    created_at: { type: Date, require: true, default: Date.now() },
    modified_at: { type: Date, require: true, default: Date.now() },
    deleted_at: { type: Date, require: true, default: Date.now() },

})

//product_invetory schema
const productInventorySchema = new mongoose.Schema({
    quantity: { type: Number, require: true },
    created_at: { type: Date, require: true, default: Date.now() },
    modified_at: { type: Date, require: true, default: Date.now() },
    deleted_at: { type: Date, require: true, default: Date.now() },
})

//discount schema
const discountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    discount_percent: { type: Number, require: true },
    active: { type: Boolean },
    created_at: { type: Date, require: true, default: Date.now() },
    modified_at: { type: Date, require: true, default: Date.now() },
    deleted_at: { type: Date, require: true, default: Date.now() },
})

//product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    SKU: { type: String },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'product_category' },  //referencing the Category model
    inventory_id: { type: mongoose.Schema.Types.ObjectId, ref: 'product_inventory' }, //refrencing to product inventory
    price: { type: Number },
    discount_id: { type: mongoose.Schema.Types.ObjectId, ref: 'discount' }, //refrencing to discount
    created_at: { type: Date, require: true, default: Date.now() },
    modified_at: { type: Date, require: true, default: Date.now() },
    deleted_at: { type: Date, require: true, default: Date.now() },

})

const ProductCategory = mongoose.model("product_category", productCategorySchema);
const ProductInventory = mongoose.model("product_inventory", productInventorySchema);
const discount = mongoose.model("discount", discountSchema)
const Product = mongoose.model('product', productSchema);