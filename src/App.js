import React, { Fragment } from 'react';

import MarketMaker from './controllers/MarketMaker';
import './assets/scss/style.scss';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MarketMaker />
            </React.Fragment>
        )
    }
}

export default App