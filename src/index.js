import React from 'react';
import { render } from 'react-dom';
import './index.css';
const App = () => (
    <div className="app-container">
        <h1>It Works!!!</h1>
    </div>
)

render(<App/>, document.getElementById('app'))

