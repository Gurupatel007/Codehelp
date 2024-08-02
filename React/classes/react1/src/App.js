// import { type } from '@testing-library/user-event/dist/type';

import React, {useState} from 'react';
import './App.css';
import Products from './components/Products'
import NewProduct from './components/NewProduct'

function App() {
  const products = [
    {
      id:"p1",
      title:"Nirma",
      amount : 100,
      date : new Date(2021, 2, 28),
    },
    {
      id:'p2',
      title : "Wheel",
      amount : 200,
      date : new Date(2021, 3, 28),
    },
    {
      id:'p3',
      title : "Rin",
      amount : 300,
      date : new Date(2021, 4, 28),
    },
    {
      id:'p4',
      title : "Surf Excel",
      amount : 400,
      date : new Date(2021, 5, 28),
    },

  ];
  // const [newProducts, setNewProducts] =  useState(products);

  function printProductData(data){
    console.log("I am inside the App component");
    console.log(data);
    // setNewProducts((prevProducts) => {
    //   return [data, ...prevProducts];
    // });
    // products.push(data);
  }


  return (
    <div>
      <NewProduct printProduct={printProductData} />
      <Products items={products}/>
    </div>
  );
}

export default App;
