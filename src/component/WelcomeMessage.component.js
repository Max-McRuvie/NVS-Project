import React from "react";

class WelcomeMessage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="welcome-container">
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
                </div>
            </div>
        );
    }
}

export default WelcomeMessage;