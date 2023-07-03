import React from "react";
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {Layout, Typography, Space} from "antd";
import {Navbar, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';
import './App.css';
function App() {
  return (
      <Router>
   <div className='app'>
       <div className="navbar">
           <Navbar/>
       </div>
       <div className="main">
           <Layout>
               <div className="routes">
                   <Switch>
                      <Route exact path="/">
                          <Homepage/>
                      </Route>
                       <Route path="/cryptocurrencies">
                           <Cryptocurrencies/>
                       </Route>
                       <Route path="/crypto/:coinId">
                           <CryptoDetails/>
                       </Route>
                       <Route path="/news">
                           <News/>
                       </Route>
                   </Switch>
               </div>
           </Layout>
           <div className="footer">
               <Typography.Title level={5} style={{color: "white", textAlign: 'center'}}>Copyright © 2021
                   <Link to='/'>
                       Cryptoverse Inc.
                   </Link>  Cryptoverse <br/>
                   All rights reserved
               </Typography.Title>
               <Space>
                   <Link to='/'>Home</Link>
                   <Link to='/news'>News</Link>
               </Space>
           </div>
       </div>
   </div>
      </Router>
  );
}

export default App;
