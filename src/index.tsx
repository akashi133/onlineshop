import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Detail from './pages/Detail';

import { logo } from './assets';
//Components
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header logo={logo} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>,
);
