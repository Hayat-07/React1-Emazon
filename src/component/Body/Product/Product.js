
import './Product.css'

const Product = (props) => {
    //  console.log(props);
    let { name, price,img}=props.item;

     let {carTT}=props;


     


    return (
        <div className='product'>
            
         
            <img className='img' src={img} alt="" />
            <h6 style={{color:'#313131'}}>{name}</h6>
            <h6 style={{color:'gray'} }>$ {price}</h6>
            <button onClick={()=>{carTT(props.item)}} className='btn'>Add to cart <i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
            
            
        </div>
    );
};

export default Product;