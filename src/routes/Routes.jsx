import React from 'react';
import {BrowserRouter as Router,Switch,Route/*,Link*/,NavLink} from "react-router-dom";
import Inicio from './components/Inicio'
import Comentarios from './components/Comentario'
import Contactos from './components/Contactos'
import Acerca from './components/Acerca'
const Routes = () => {
    return (
        <Router>
        <div className="container mt-5">
            <div className="btn-group">
                <NavLink to="/" exact className="btn btn-dark" activeClassName="active">
                    Inicio
                </NavLink>
                <NavLink to="/contactos" className="btn btn-dark" activeClassName="active">
                    Contacto
                </NavLink>
                <NavLink to="/about" className="btn btn-dark" activeClassName="active">
                    Acerca
                </NavLink>
                <NavLink to="/comentarios" className="btn btn-dark" activeClassName="active">
                    Comentarios
                </NavLink>
            </div>
            <hr/>
            <Switch>
                <Route path="/" exact>
                    <Inicio/>
                </Route>
                <Route path="/contactos">
                    <Contactos/>
                </Route>
                <Route path="/about">
                    <Acerca/>
                </Route>
                <Route path="/comentarios">
                    <Comentarios/>
                </Route>

            </Switch>
        </div>
        </Router>
        
    );
};


export default Routes;