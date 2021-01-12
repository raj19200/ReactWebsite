import React from 'react';
function Gallery(){
    return(<>
    <section id="Gallery">
         <div className="container mt-5 text-center">
         <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
         <h1 className="my-5" style={{ fontFamily: 'Open Sans Condensed' }}>GALLERY</h1>
            <div className="row">
                <div className="col-4">
                <img src="https://source.unsplash.com/random" style={{ height: "650px" }} className="img-fluid animated" alt="demo" />
                </div>
                <div className="col-4">
                <img src="https://source.unsplash.com/random" style={{ height: "650px" }} className="img-fluid animated" alt="demo" />
                </div>
                <div className="col-4">
                <img src="https://source.unsplash.com/random" style={{ height: "650px" }} className="img-fluid animated" alt="demo" />
                </div>
            </div>
         </div>
         </section>
    </>)
}
export default Gallery;