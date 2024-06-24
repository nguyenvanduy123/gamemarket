import React, { useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { getAccount } from "store/address/action";
import Pages from './views/pages/index';

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAccount());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  
  return (
    <BrowserRouter>
      <NotificationContainer />
      <Switch>
        <Route from="/" component={Pages} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;