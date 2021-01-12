import React from 'react';
import background from './img/3.webp'
function Thingstodo(){
    return(<>
    <section id="see">
        <div className="container mt-5 text-center">
        <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        <h1 className="my-5" style={{ fontFamily: 'Open Sans Condensed' }}>THINGS TO DO</h1>
            <div className="row text-center mt-5">
                <div className="col-4">
                    <h2 className="text-dark">Wineries Tour</h2>
                    <p className="mt-4" style={{ fontFamily: 'Open Sans Condensed' }} >I'm a paragraph. Click here to add<br /> your own text and edit me.</p>
                </div>
                <div className="col-4">
                    <h2 className="text-dark">Cultural Sites</h2>
                    <p className="mt-4" style={{ fontFamily: 'Open Sans Condensed' }} >I'm a paragraph. Click here to add<br /> your own text and edit me.</p>
                </div>
                <div className="col-4">
                    <h2 className="text-dark">Market Tour</h2>
                    <p className="mt-4" style={{ fontFamily: 'Open Sans Condensed' }} >I'm a paragraph. Click here to add<br /> your own text and edit me.</p>
                </div>
            </div>
            <div className="row text-center mt-5">
                <div className="col-4">
                    <h2 className="text-dark">Leisure Activities</h2>
                    <p className="mt-4" style={{ fontFamily: 'Open Sans Condensed' }} >I'm a paragraph. Click here to add<br /> your own text and edit me.</p>
                </div>
                <div className="col-4">
                    <h2 className="text-dark">Birds Safari</h2>
                    <p className="mt-4" style={{ fontFamily: 'Open Sans Condensed' }} >I'm a paragraph. Click here to add<br /> your own text and edit me.</p>
                </div>
                <div className="col-4">
                    <h2 className="text-dark">Horse Riding </h2>
                    <p className="mt-4" style={{ fontFamily: 'Open Sans Condensed' }} >I'm a paragraph. Click here to add<br /> your own text and edit me.</p>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="container mt-5 text-center " style={{ backgroundImage: `url(${background})`, height: "600px" }}>
            <div className="container">
                <div className="card" style={{width: "50%",height:"50%" ,marginLeft:"25%"}}>
                    <div className="card-body">
                        <h5 className="card-title mt-4">GUEST REVIEW</h5>

                        <p className="card-text mt-4">I'm a paragraph. Click here to add your<br/> own text and edit me. I’m a great place<br/> for you to tell a story and let your users <br/>know a little more about you.</p>
                        
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>)
}
export default Thingstodo;