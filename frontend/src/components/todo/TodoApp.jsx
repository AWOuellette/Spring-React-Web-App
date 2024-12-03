import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'   
import withParams from './withParams.jsx'
import '../../App.css';
import '../../bootstrap.css';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import TodoComponent from './TodoComponent.jsx';

class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent);
        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));

        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} />
                        <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponentWithNavigation /></AuthenticatedRoute>} />
                        <Route path="/todo/:id" element={<AuthenticatedRoute><TodoComponentWithParamsAndNavigation /></AuthenticatedRoute>} />
                        <Route path="/logout" element={<LogoutComponent />} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

export default TodoApp