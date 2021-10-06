import React from 'react';

const Shop = () => (
    <div>
    <style dangerouslySetInnerHTML={{__html: "\n  .about {\n    padding-top: 30px ;\n}\n\n.about .heading h2 {\n    font-size: 30px;\n    font-weight: 700;\n    margin: 0;\n    padding: 0;\n\n}\n\n.about .heading h2 span {\n    color: #F24259;\n}\n\n.about .heading p {\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 1.7;\n    color: #999999;\n    margin: 20px 0 60px;\n    padding: 0;\n}\n\n.about h3 {\n    font-size: 25px;\n    font-weight: 700;\n    margin: 0;\n    padding: 0;\n}\n\n.about p {\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 1.7;\n    color: #999999;\n    margin: 20px 0 15px;\n    padding: 0;\n}\n\n.about h4 {\n    font-size: 15px;\n    font-weight: 500;\n    margin: 8px 0;\n}\n\n.about h4 i {\n    color: #F24259;\n    margin-right: 10px;\n}\n" }} />
    <section className="about" id="about">
      <div className="container">
        <div className="heading text-center">
          <h2>
            <span>L</span>earn</h2>
            <h3 style={{paddingTop: '20px'}}>Lorem ipsum dolor sit amet, consectetur </h3>
            <p style={{marginBottom: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.</p>
          
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src="https://www.keystoneacademic.com/hs-fs/hubfs/shutterstock_404189197.jpg?width=2500&name=shutterstock_404189197.jpg" alt="about" className="img-fluid" width="90%"   style={{paddingBottom: '20px'}}/>
          </div>
          
          <div className="col-lg-6">
          <p style={{marginBottom: '20px', marginTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
           
            <div className="row">
              <div className="col-md-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Shop;