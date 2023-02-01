import React, { useEffect, useState } from 'react';



import './Body.css'


import Product from './Product/Product';







const body = () => {



    let [items, setItems] = useState([]);


    useEffect(()=>{

        fetch('products.json')
        .then(res => res.json())
        .then(data=>setItems(data));
        
    }
        ,[])



        let [cartItems, setCartItems]=useState([]);

        
          let  carTT=(x)=>{
                let newCart = [...cartItems, x];
                setCartItems(newCart);   
                
           };
            




    return (
        <div className='body'>

           <div className='sidebar'>
                <div>
                    <h3>Total Item:{cartItems.length}</h3>
                     
            
                     {
                        cartItems.map(x=> <h3>{cartItems.name}</h3>)
                     }

                     {/* <h3>{x.name}</h3> */}
                     
                     <button className='buybtn'>BUY  </button>

                 </div>
            
            </div>
            
        
        
        
        
        
        
        
        
            <div className='itembox'>
            {
               items.map(item => <Product key={item.id}  item={item} carTT={carTT}> </Product> )
            
             }
             
            </div>
           
        
            
            
        </div>
    )
};

export default body;