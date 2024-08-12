const ProductCard = ({ props }) => {
  let css = '';
  let discount = '';

  if (props.price > props.priceDiscount) {
    css = 'line-through text-light-gray';
    discount = '$' + props.priceDiscount;
  }

  return (
    <div>
      <img className='h-80 w-72 shadow-2xl hover:scale-110' src={props.image} alt='' />
      <div>
        <h6 className="text-dark-gray-3">Tênis</h6>
        <h1 className='text-2xl text-dark-gray-3'>{props.name}</h1>
        <div className='flex gap-4'>
          <span className={'text-2xl text-dark-gray  ' + css}>
            ${props.price}
          </span>
          <span className='text-2xl text-dark-gray'>{discount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;