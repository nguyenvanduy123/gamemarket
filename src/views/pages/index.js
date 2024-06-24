import Layout from "../../components/Layout/layout";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { routers } from "../../router";
// import { setBalance } from "store/balance/action";
// import { get_user_info } from "store/user_info/action";

const AppRoute = ({ component: Component, exact, title, ...rest }) =>
{



  return (
    <Route
      exact={exact}
      {...rest}
      render={(props) => (
        <Layout title={title}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const Pages = () =>
{
  

  return (
    <BrowserRouter>
    
      <Switch>
        {routers.map((e, i) => (
          <AppRoute
            key={i}
            path={e.path}
            component={e.component}
            exact={e.exact}
            title={e.title}
          />
        ))}
        <Redirect path="/" to="/home" />
      </Switch>
   
    </BrowserRouter>
  );
};

export default Pages;