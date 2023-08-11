import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch,useSelector } from 'react-redux';
const Cart = (props) => {
  const item=useSelector(state=>state.cart.item)
  const quantity=useSelector(state=>state.cart.quantity)
  const Totalamount=useSelector(state=>state.cart.Totalamount)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        
       { item.map((i)=>{
       return <CartItem
          item={{ title: i.title, quantity: quantity, total: Totalamount, price: i.price }}
        />

       })       
       
       }
      </ul>
    </Card>
  );
};

export default Cart;
