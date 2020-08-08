import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import footerlogo from "./assets/images/l.png";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <footer className="page-footer font-small fixed-bottom " style={{font: "bold",height: "8vh",color:"rgb(22, 160, 132)"}}>
      <div className="footer-copyright text-center py-3" style={{background: "transparent",padding: 0}}>
        <i className="fa fa-copyright"></i>&emsp;2020 Copyright
        <a href="http://tensors.in" target="_blank" style={{color:"rgb(22, 160, 132)",font:"bold"}}>&emsp;POWERED BY TENSORSCI&emsp;
        <img src={footerlogo} className="img-fluid" style={{height: "40px"}}/></a>
      </div>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
