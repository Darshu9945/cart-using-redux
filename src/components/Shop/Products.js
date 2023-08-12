import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
          quantity={1}
        />
        <ProductItem
          title='Copy'
          price={10}
          description='This is a first product - amazing!'
          quantity={1}
        />
        <ProductItem
          title='score'
          price={12}
          description='This is a first product - amazing!'
          quantity={1}
        />
        <ProductItem
          title='game'
          price={8}
          description='This is a first product - amazing!'
          quantity={1}
        />
      </ul>
    </section>
  );
};

export default Products;
