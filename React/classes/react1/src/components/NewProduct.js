import './NewProduct.css'
import ProductForm from './ProductForm'

function NewProduct(props){

    function saveProduct(productData){
        console.log("I am inside New Product");
        console.log(productData);

        props.printProduct(productData);
    }

    return (
        <div className="new-product">
            <ProductForm onSaveProduct = {saveProduct} />
        </div>
    )
}

export default NewProduct;