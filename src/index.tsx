import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './views/home.view';
import BoardOfEditorsView from './views/boardOfEditors.view';
import EditorAdvisoryBoard from './views/editorAdvisoryBoard.view';
import reportWebVitals from './reportWebVitals';

import {
    BrowserRouter,
    Routes,
    Route, BrowserRouter as Router,
} from "react-router-dom";
import {render} from "react-dom";
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Home />
//
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/boardOfEditorsView" element={<BoardOfEditorsView/>}>
            </Route>
            <Route path="/editorAdvisoryBoard" element={<EditorAdvisoryBoard/>}>
            </Route>

        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
