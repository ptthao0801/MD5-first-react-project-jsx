import React from 'react';
import ReactDOM from 'react-dom/client';

const name = "Thao JSX";
const jsxElement = <h1 style={{ textAlign: "center" }}>
    {name}
</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxElement);

