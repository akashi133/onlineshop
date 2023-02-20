import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
// import { useSearchParams } from 'react-router-dom';
import { FirebaseDb } from '../../db/db';
import { RootState } from '../../store/store';

const Detail = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const { getProduct } = FirebaseDb();
  const { product } = useSelector((state: RootState) => state.product);

  // let params = searchParams.get('key');
  // console.log(params);

  const location = useLocation();
  const params = useParams();
  // console.log(history);

  useEffect(() => {
    if (params.id) {
      getProduct(params.id);
    }
  }, [params]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="max-h-[400px] max-w-[450px]">
        <img src={product?.image} alt="" />
      </div>
      <div className="text-center ">
        <h1 className="text-xl font-bold">{product?.title}</h1>
        <p className="text-xl">{product?.desc}</p>
        <span className="text-xl font-semibold">{product?.price}$</span>
      </div>
    </div>
  );
};

export default Detail;
