import React from 'react';
import logo from './logo.svg';
import RoutePath from './RoutePath'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
toast.configure({
  autoClose: false,
  draggable: false,
});
function App() {
  return (
    <RoutePath />
  );
}

export default App;
