import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Auth from './containers/Auth/Auth';
import { AuthProvider } from './containers/Auth/AuthProvider';

function App(): React.ReactElement {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
