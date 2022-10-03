import React from "react";
import { Switch,Route } from "react-router-dom";
import {Container} from "reactstrap"
import CartDetail from "../cart/CartDetail";
import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import DashBoard from "./DashBoard";

function App() {
  return (
    <div>
      <Container className="mw-100">
        <Navi/>
        <Switch>
          <Route path="/" exact component={DashBoard} />
          <Route path="/product" exact component={DashBoard} />
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
          <Route path="/saveproduct" component={AddOrUpdateProduct} />
          <Route path="/cart" exact component={CartDetail} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
