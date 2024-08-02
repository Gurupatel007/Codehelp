import react, {useState} from 'react';
import "./ProductForm.css";

function ProductForm(props){


    const [newtitle,setTitle] = useState('');
    const [newdate,setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const productDate = {
            title : newtitle,
            date : newdate
        }
        // console.log(productDate);
        props.onSaveProduct(productDate);


        setDate('');
        setTitle('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-product_title">
                <label>Title: </label>
                <input type="text" value={newtitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-product_title">
                <label>Date</label>
                <input type="date" value={newdate} onChange={dateChangeHandler}></input>
            </div>
            <div className="new-product_date">
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}

export default ProductForm;