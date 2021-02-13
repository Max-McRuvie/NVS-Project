import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
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
                <div className="mt-40 mb-40 no-padding navbar navbar-expand-sm">
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
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
