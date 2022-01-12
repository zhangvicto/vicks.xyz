import './index.css';
import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Home from "./home";
import Projects from "./project";
import Resume from "./resume";
import Blog from "./blog";
import ProjectPage from "./projectPage";
import logo from './logo.png'

function App() {
    return (
        <div className="app">
            <MenuBar />
            <Main />
        </div>
    )
}

class MenuBar extends Component {
    render() {
        return (
            <ol className="menu-bar">
                <NavLink exact className="menu-logo" to='/'><img src={logo} alt="Logo" /></NavLink>
                <li className="menu-item push-menu"><NavLink exact className="menu-text" activeClassName="current-menu" to='/'>Home</NavLink></li>
                <li className="menu-item"><NavLink exact className="menu-text" activeClassName="current-menu" to='/resume'>Resume</NavLink></li>
                <li className="menu-item"><NavLink exact className="menu-text" activeClassName="current-menu" to='/projects'>Projects</NavLink></li>
                <li className="menu-item"><NavLink exact className="menu-text" activeClassName="current-menu" to='/blog'>Blog</NavLink></li>
            </ol>
        );
    }
}


const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/projectpage' component={ProjectPage} />
    </Switch>
)

export default App;