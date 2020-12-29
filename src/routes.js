import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Header from './Components/Header/header';
import Teste from './Pages/Teste/teste';
import Footer from './Components/Footer/footer';
import Unidade from './Pages/Unidade/unidade';
import UnidadesLista from './Pages/Unidade/unidadesLista';
import UnidadeFormulario from './Pages/Unidade/unidadeFormulario';
import Usuarios from './Pages/Usuarios/usuario';
import UsuarioFormulario from './Pages/Usuarios/usuarioFormulario';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/teste" component={Teste} />
          <Route exact path="/unidade/nova" component={UnidadeFormulario} />
          <Route exact path="/unidade/:id/editar" component={UnidadeFormulario} />
          <Route exact path="/unidades" component={UnidadesLista} />
          <Route exact path="/unidade/:id" component={Unidade} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/usuario/novo" component={UsuarioFormulario} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>

  )
}