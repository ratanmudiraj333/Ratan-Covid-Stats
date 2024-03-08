import React from 'react';
import ReactDOM from 'react-dom';
import './covid.css';
import Covid from "./covid.js"

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

ReactDOM.render(<div>
<Covid />
</div>
,document.getElementById("root"));


