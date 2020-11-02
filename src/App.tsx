import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './containers/Auth/AuthProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import About from './components/About/About';
import Auth from './containers/Auth/Auth';

const store = createStore(reducer);

function App(): React.ReactElement {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route path="/auth" component={Auth} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Router>
            </AuthProvider>
        </Provider>
    );
}

export default App;
