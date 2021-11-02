import Home from './pages/home';
import ContactUs from './pages/contactUs';
import ReviewMessage from './pages/review_message';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/review_message" component={ReviewMessage}></Route>
        <Route path="/contact_us" component={ContactUs}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
