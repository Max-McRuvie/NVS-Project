import React from "react";

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="mt-40 mb-40 no-padding navbar navbar-expand-sm">
            
                <a className="navbar-brand">
                    <img src="https://www.nudgeexchange.com/static/media/Nudge_logo.0012a0a2.svg" alt="Nudge Logo" className="logo"></img>
                </a>
   
            </nav>
        );
    }
}

export default Nav;