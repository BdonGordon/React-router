import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';

/**
* This class will control all the routes, much like the '/routes/index.jsx' of the SRED application.
* We control the components Home, Roster, and Schedule here... We'll play with the paths once we have
* finished this application.
**/
class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/roster" component={Roster} />
                    <Route path="/schedule" component={Schedule} />
                </Switch>
            </main>
        );
    }
}

export default Main;