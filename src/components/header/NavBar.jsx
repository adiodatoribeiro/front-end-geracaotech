import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const styleUnderline = 'text-primary underline decoration-2';

  return (
    <nav className="py-2">
      <ul className="flex items-center justify-start gap-7 font-bold underline-offset-8">
        <li className='hover:text-primary'>
          <Link
            to="/home"
            className={
              pathname === '/home' ? styleUnderline : ''
            }
          >
            Home
          </Link>
        </li>
        <li className='hover:text-primary'>
          <Link
            to=""
            className={
              pathname === 'product-listing' ? styleUnderline : ''
            }
          >
            Produtos
          </Link>
        </li>
        <li className='hover:text-primary'>
          <Link
            to=""
            className={
              pathname === '' ? styleUnderline : ''
            }
          >
            Categorias
          </Link>
        </li>
        <li className='hover:text-primary'>
          <Link
            to="" 
          >
            Meus Pedidos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
