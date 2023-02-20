import { useEffect } from 'react';
//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { logo } from '../../assets';
import { FirebaseDb } from '../../db/db';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Card from '../../components/Card';

const styles = {
  app: 'text-center',
  h1: 'text-red-500',
};

// const db = FirebaseDb();

function App() {
  const { getProducts } = FirebaseDb();
  const { products } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products) {
      console.log(products);
    }
  }, [products]);

  return (
    <div className={styles.app}>
      <h1 className={styles.h1}>Ruslan yebishe</h1>
      <div className="grid grid-cols-3">
        {products?.map((item, idx) => (
          <Card {...item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;
