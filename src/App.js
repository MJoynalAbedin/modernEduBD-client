import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddCourse from "./Components/Dashboard/AddCourse/AddCourse";
import Checkout from "./Components/Dashboard/Checkout/Checkout";
import Dashboard from "./Components/Dashboard/Dashboard";
import ManageCourse from "./Components/Dashboard/ManageCourse/ManageCourse";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import Review from "./Components/Dashboard/Review/Review";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

  const [signedInUser, setSignInUser] = useState({});

  return (
    <UserContext.Provider value={[signedInUser, setSignInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addCourse">
            <AddCourse />
          </PrivateRoute>
          <PrivateRoute path="/manageCourse">
            <ManageCourse />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/course/:_id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
