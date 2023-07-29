
// REACT RELATED COMPONENTS
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS FILES
import "./index.css"

// FILES RELATED COMPONENTS
import { ToDoListPage } from './pages/ToDoLIstPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoListPage/>
  </React.StrictMode>
);


