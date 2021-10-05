import React from 'react';

const About = () => {
    return (
    
                <div>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <style dangerouslySetInnerHTML={{__html: "\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\n.column {\n  float: left;\n  width: 33.3%;\n  margin-bottom: 16px;\n  padding: 0 8px;\n}\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  margin: 8px;\n}\n\n.about-section {\n  padding: 50px;\n  text-align: center;\n  background-color: #474e5d;\n  color: white;\n}\n\n.container {\n  padding: 0 16px;\n}\n\n.container::after, .row::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.title {\n  color: grey;\n}\n\n.button {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n}\n\n.button:hover {\n  background-color: #555;\n}\n\n@media screen and (max-width: 650px) {\n  .column {\n    width: 100%;\n    display: block;\n  }\n}\n" }} />
                  <div className="about-section">
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>
                  </div>
                  </div>
              );
    
    
}



export default About;