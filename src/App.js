import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/tools.scss';
import './img/welcomePerson.png';

// components 
import NavBar from './component/Nav.component';
import  WelcomeMessage from "./component/WelcomeMessage.component";
import CertificationForm from "./component/CertificationValidationForm.component";

function App() {
  return (
      <div className="page_style">
          <div className="container-fluid">
            <div className="row">
              <div className="pb-100 col-11 col-sm-11 col-md-11">
                <NavBar />
                <div className="col-md-4 offset-md-4">
                  <WelcomeMessage/>
                  <CertificationForm/>
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}

export default App;
