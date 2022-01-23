import React from 'react';
import { Home } from './Modules';

import './Styles/index.scss';
import 'antd/dist/antd.min.css';
import { Navbar } from './Components';

function App() {
  return (
    <>
    <Navbar/>
    <Home />
    </>
  );
}

export default App;
