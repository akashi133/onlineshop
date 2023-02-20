import { FC } from 'react';
//helpers
import { openInNewtab } from '../../helpers/link.helper';

interface CardProps {
  image: string;
  title: string;
  desc: string;
  price: number | string;
  id: string;
}

const Card: FC<CardProps> = ({ image, title, desc, price, id }) => {
  const onClick = () => {
    openInNewtab(id);
  };

  return (
    <div
      onClick={onClick}
      className="w-full cursor-pointer shadow-sm p-2 rounded hover:shadow-2xl transition-all">
      <div className="max-h-[300px]">
        <img src={image} alt="" className="w-full h-[300px] rounded-lg" />
      </div>
      <div className="text-left">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{desc}</p>
        <span className="text-xl font-semibold">{price}$</span>
      </div>
    </div>
  );
};
export default Card;
