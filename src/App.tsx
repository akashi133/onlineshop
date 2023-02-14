import React, { useEffect } from 'react';
import Header from './components/Header';
import { logo } from './assets';
import { FirebaseDb } from './db/db';

const styles = {
  app: 'text-center',
  h1: 'text-red-500',
};

const db = new FirebaseDb();

function App() {
  useEffect(() => {
    db.getProducts()
  }, []);
  return (
    <div className={styles.app}>
      <Header logo={logo} />
      <h1 className={styles.h1}>Ruslan yebishe</h1>
    </div>
  );
}

export default App;
