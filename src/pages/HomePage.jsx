import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import ProductListing from '../components/product-listing/ProductListing';
import Section from '../components/Section';
import Icons from '../components/Icons';
import JordanOfert from '../components/JordanOfert';
import { propTypeClassName } from '@material-tailwind/react/types/components/timeline';

const HomePage = () => {
  return (
    <Layout>
      <Gallery
        slides ={[
          '/public/tenis-logo.png',
          '/public/tenis-logo.png',
          '/public/tenis-logo.png',
          '/public/tenis-logo.png',
        ]}
      />
      <Section />
      <Icons />
      <ProductListing/>
      <JordanOfert/>
    </Layout>
  );
};

export default HomePage;