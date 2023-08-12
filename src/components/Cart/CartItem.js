import { cartaction } from '../../store/cart';
import classes from './CartItem.module.css';
import { useDispatch,useSelector } from 'react-redux';
const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
const dispatch=useDispatch()
const additemhandler=()=>{
  console.log("clicked")
  dispatch(cartaction.additem({
    title,
    price,
    quantity,
  }))
}
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>{
            dispatch(cartaction.removeitem({
              title,
              price
            }))
          }}>-</button>
          <button onClick={ additemhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
