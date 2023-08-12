import { cartaction } from '../../store/cart';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { itemaction } from '../../store/cart.slice';
const ProductItem = (props) => {
  const { title, price, description ,quantity} = props;
  const dispatch=useDispatch()
const additemhandler=()=>{
dispatch(cartaction.additem({
  title,
  price,
  description,
  quantity
}))
dispatch(itemaction.showdata())

}
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={additemhandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
