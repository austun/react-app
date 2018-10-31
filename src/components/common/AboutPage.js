import React from 'react';

class AboutPage extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>About</h1>
                <p>This app built with React, Redux, React-Router, Redux Saga, Material UI and Axios.</p>
                <p>The navigate header above added in order to demonstrate a React-Router example.</p>
            </div>
        )
    }
}

export default AboutPage;