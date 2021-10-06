import React from 'react';

const About = () => {
    return (
      <div>
      <style dangerouslySetInnerHTML={{__html: "\n  .about {\n    padding-top: 30px ;\n}\n\n.about .heading h2 {\n    font-size: 30px;\n    font-weight: 700;\n    margin: 0;\n    padding: 0;\n\n}\n\n.about .heading h2 span {\n    color: #F24259;\n}\n\n.about .heading p {\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 1.7;\n    color: #999999;\n    margin: 20px 0 60px;\n    padding: 0;\n}\n\n.about h3 {\n    font-size: 25px;\n    font-weight: 700;\n    margin: 0;\n    padding: 0;\n}\n\n.about p {\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 1.7;\n    color: #999999;\n    margin: 20px 0 15px;\n    padding: 0;\n}\n\n.about h4 {\n    font-size: 15px;\n    font-weight: 500;\n    margin: 8px 0;\n}\n\n.about h4 i {\n    color: #F24259;\n    margin-right: 10px;\n}\n" }} />
      <section className="about" id="about">
        <div className="container">
          <div className="heading text-center">
            <h2>About
              <span>Us</span></h2>
            <p style={{marginBottom: '20px'}}>CourseX is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies.
              
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png" alt="about" className="img-fluid" width="100%"   style={{paddingBottom: '20px'}}/>
            </div>
            <div className="col-lg-6">
              <h3>Serving the world through learning </h3>
              <p>We envision a world where anyone, anywhere has the power to transform their life through learning. Whatever your learning styles, we have a course that fits. We are here to help you prepare for the path ahead. Use our Chatbot is to
  get course recommendations based on your needs.</p>
              <div className="row">
                <div className="col-md-6">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
                
              );
    
    
}




export default About;