import Home from './pages/home';
import ContactUs from './pages/contactUs';
import ReviewMessage from './pages/review_message';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';
import NewsApp from './pages/newsApp';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistore } from "./store/store"
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
    <BrowserRouter>
    <Routes>
        <Route path="/news_app" exact element={<NewsApp/>}></Route>
        <Route path="/review_message" exact element={<ReviewMessage/>}></Route>
        <Route path="/contact_us" exact element={<ContactUs/>}></Route>
        <Route path="/" exact element={<Home/>}></Route>
        <Route index element={<Home />} />    
       </Routes>  
    </BrowserRouter>
    </PersistGate>
    </Provider>
  );
}

export default App;
