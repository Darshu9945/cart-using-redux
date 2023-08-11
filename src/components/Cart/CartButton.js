import { cartaction } from '../../store/cart';
import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch()
  const iscart=useSelector(state=>state.cart.iscart)
  console.log(iscart,"iscart")
  const carthandler=()=>{
    dispatch(cartaction.cartopne())
  }
  return (
    <button onClick={carthandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
