import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

//Config
import { firebaseConfig } from '../config/firebase';
import { setProduct } from '../store/productSlice';
import { ProductI, setProducts } from '../store/productsSlice';

export const FirebaseDb = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const dispatch = useDispatch();

  async function getProducts() {
    try {
      const colData = await getDocs(collection(db, 'products'));
      const data: any = colData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      dispatch(setProducts(data));
      console.log(data);
    } catch (_err) {
      console.info(_err);
    }
  }

  async function getProduct(id: string) {
    try {
      const product = doc(db, 'products', id);
      const colData = await getDoc(product);
      const data: any = colData.data();

      dispatch(setProduct(data));
    } catch (_err) {
      console.info(_err);
    }
  }

  return {
    getProducts,
    getProduct,
  };
};

// export class FirebaseDb {
//   static instance: any;
//   app: any;
//   db: any;

//   constructor() {
//     if (FirebaseDb.instance) return FirebaseDb.instance;

//     FirebaseDb.instance = this;

//     this.app = initializeApp(firebaseConfig);
//     this.db = getFirestore(this.app);
//   }
// async getProducts() {
//   try {
//     const colData = await getDocs(collection(this.db, 'products'));
//     const data = colData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//     console.log(data);
//   } catch (_err) {
//     console.info(_err);
//   }
// }
// }
