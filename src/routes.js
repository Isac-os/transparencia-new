import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Header from './Components/Header/header';
import Teste from './Pages/Teste/teste';
import Footer from './Components/Footer/footer';
import Unidade from './Pages/Unidade/unidade';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/teste" component={Teste} />
          <Route exact path="/unidade" component={Unidade} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </>

  )
}