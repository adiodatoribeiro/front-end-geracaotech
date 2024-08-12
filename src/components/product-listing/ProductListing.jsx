import ProductCard from '../product-card/ProductCard.jsx';
import ProductItens from './ProductItens.jsx';

const ProductListing = () => {
  let cards = [];
  for (let i = 0; i < ProductItens.length; i++) {
    cards.push(<ProductCard props={ProductItens[i]} />);
  }
  return <div>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-bold py-8'>Produtos em alta</h1>
            <a href="#" className='text-primary hover:text-dark-gray py-8'>Ver todos ➝</a>
          </div>
          <div className='flex flex-wrap gap-4 justify-center'> {cards} </div>
        </div>
};

export default ProductListing;