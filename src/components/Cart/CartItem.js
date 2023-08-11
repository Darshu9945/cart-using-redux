import { cartaction } from '../../store/cart';
import classes from './CartItem.module.css';
import { useDispatch,useSelector } from 'react-redux';
const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
const dispatch=useDispatch()

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onChange={()=>{
            dispatch(cartaction.removeitem({
              title,
              price
            }))
          }}>-</button>
          <button onChange={()=>{
dispatch(cartaction.additem({
  title:title,
  price:price
}))
          }}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
