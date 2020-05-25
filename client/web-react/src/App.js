import React from 'react';
import './assets/css/App.css';
import Login from "./pages/Login";
import Main from "./pages/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const token = localStorage.getItem("token");
  return (
    <div>
        {token ?<Main/>: <Login/>}

    </div>
  );
}

export default App;
