import Banner from "./components/Home/banner"
import {
  Switch,
  Route
} from "react-router-dom";
import {Provider} from "react-redux"
import checkoutReducer from '../src/redux/Checkout/item.reducers'
import {createStore} from "redux";

import { Container } from 'react-bootstrap';
import TableData from "./components/Table/TableData";


const store = createStore(checkoutReducer);

function App() {
  return (
    <Provider store={store}>
     <Container fluid className="container-class">
     <Switch>
     <Route exact path="/">
     <Banner />
     </Route>
     <Route path="/table">
       <TableData />
     </Route>
   </Switch>
   </Container>
   </Provider>
  );
}

export default App;
