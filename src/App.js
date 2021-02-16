import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/tools.scss';
import './img/welcomePerson.png';

function App() {
  return (
      <div className="page_style">
          <div className="container-fluid">
            <div className="row">
              <div className="p1-0 col-1 col-sm-1 col-md-1">
                <nav className="style_sidebar">
                  <ul>
                    <li className="styled_logo">
                      <img src="https://www.nudgeexchange.com/static/media/Nudge_sygnet.ec0a8af4.svg" alt="Nudge Logo" className="logo_nav"></img>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="pb-100 col-11 col-sm-11 col-md-11">
                <nav className="mt-40 mb-40 no-padding navbar navbar-expand-sm">
                  <a href="">
                    <a className="navbar-brand">
                      <img src="https://www.nudgeexchange.com/static/media/Nudge_logo.0012a0a2.svg" alt="Nudge Logo" className="logo"></img>
                      </a>
                  </a>
                  <ul className="ml-auto navbar-nav">
                    <div className="text-right">
                      <div className="style_userAction">
                        <div className="mr-3">
                          <div className="dropdown nav-item">
                            <p>Max McRuvie</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </nav>
                <div className="col-md-4 offset-md-4">
                  <div className="text-center">
                    <img src="https://nudgeexchange.com/static/media/welcomePerson.d7c7e3c3.png" alt="Welcome Person image" className="welcomeImage"></img>
                  </div>
                  <div data-testid="PersonalDetails">
                    <div className="mt-20 mb-40 text-center font-20">
                      <p>Hey, I’m Darren! Lets get you verified.</p>
                      <p>
                        <strong>Enter your Qualifications</strong>
                      </p>
                    </div>
                    <form novcalidate date-testid="PersonalDetailsForm">
                      <div className="mb-20 row form-group">
                        <div className="col-md-6">
                          <input id="firstName" name="firstName" placeholder="FIRST NAME" data-testid="firstName" type="" class="form-control" aria-invalid="false" value=""></input>
                        </div>
                        <div className="col-md-6">
                          <input id="lastName" name="lastName" placeholder="SURNAME" data-testid="lastName" type="" class="form-control" aria-invalid="false" value=""></input>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                      <div className="mb-20 row form-group">
                          <div className="col">
                            <input id="institutionName" name="institutionName" data-testid="institutionName" placeholder="INSTITUTION NAME" type="" class="form-control" aria-invalid="false" value=""></input>
                          </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}

export default App;
