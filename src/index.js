import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Counter  from './components/Counter';

const App = () => (
    <div className="app-container">
        <h1>It Works!!!</h1>
        <Counter/>
    </div>
)

render(<App/>, document.getElementById('app'))

