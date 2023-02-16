import { logo } from '../../assets';

const styless = {
  hv: 'hover:bg-violet-600 hover:text-black cursor-pointer',
};

const Footer = () => {
  return (
    <div className="bottom-0 absolute w-full bg-slate-500 rounded-t-lg p-2">
      <footer className="flex justify-between">
        <div className="cursor-pointer">
          <img src={logo} alt="ruslan pidr" className="w-[100px] h-[100px] rounded-xl" />
        </div>
        <ul className="items-center flex gap-x-5 text-white">
          <li className={styless.hv}>Footer</li>
          <li className={styless.hv}>Footer</li>
          <li className={styless.hv}>Footer</li>
          <li className={styless.hv}>Footer</li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
