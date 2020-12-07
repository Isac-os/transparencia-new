import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Header from './Components/Header/header';
import Teste from './Pages/Teste/teste';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/teste" component={Teste} />
      </Switch>
    </BrowserRouter>
  )
}