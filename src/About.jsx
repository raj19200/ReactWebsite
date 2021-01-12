import React from 'react';
function About() {
    return (<>
    <section id="About">
       <div className="container mt-5 text-center">
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <div className="row mt-5 text-center">
                <div className="col-4">
                    <input type="date" className="form-control" placeholder="DDMMYY" />
                </div>
                <div className="col-4">
                    <input type="date" className="form-control" placeholder="DDMMYY" />
                </div>
                <div className="col-1">
                    <input type="text" className="form-control" placeholder="Adults" />
                </div>
                <div className="col-1">
                    <input type="text" className="form-control" placeholder="kids" />
                </div>
                <div className="col-2">
                    <button type="button" class="btn btn-dark">Search</button>
                </div>


            </div>
            <h1 className="my-5" style={{ fontFamily: 'Open Sans Condensed' }}>ABOUT</h1>
            <p className="mt-5" style={{ fontFamily: 'Open Sans Condensed' }}>I'm a paragraph. Click here to add your own text and edit me.
             It’s easy. Just click <br />“Edit Text” or double click me to add your own content and make changes to the font.<br />
              Feel free to drag and drop me anywhere you like on your page. I’m a great  <br />place for you to tell a story
              and let your users know a little more about you.</p>
       </div>
       </section>
    </>)
}
export default About;