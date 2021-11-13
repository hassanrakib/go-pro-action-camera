import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/DashboardComponents/Dashboard/Dashboard";
import Explore from "./Components/ExplorePageComponents/Explore/Explore";
import Home from "./Components/HomePageComponents/Home/Home";
import Login from "./Components/LoginComponents/Login/Login";
import Purchase from "./Components/PurchaseComponents/Purchase/Purchase";
import Navbar from "./Components/SharedComponents/Navbar/Navbar";
import PrivateRoute from "./Components/SharedComponents/PrivateRoute/PrivateRoute";
import SignUp from "./Components/SignUpComponents/SignUp/SignUp";
import AuthProvider from "./contexts/AuthProvider";
import ProductsProvider from "./contexts/ProductsProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/explore'>
                <Explore></Explore>
              </Route>
              <Route path='/signup'>
                <SignUp></SignUp>
              </Route>
              <Route path='/signin'>
                <Login></Login>
              </Route>
              <PrivateRoute path='/dashboard'>
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path='/purchase/:id'>
                <Purchase></Purchase>
              </PrivateRoute>
            </Switch>
          </BrowserRouter>
        </ProductsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
