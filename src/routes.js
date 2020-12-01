import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/home';
import Header from './Components/Header/header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}