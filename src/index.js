import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom";
import checkoutReducer from '../src/redux/Checkout/item.reducers'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(checkoutReducer);

ReactDOM.render(

  <BrowserRouter>
    <App />
   </BrowserRouter>
  ,
  document.getElementById('root')
);


