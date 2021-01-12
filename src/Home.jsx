import React from 'react';
import img from './img/1.webp'
function Home() {
    return (<>
    <section id="Home">
        <div className="container mt-5 text-center" >
        <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       
            <h1 style={{ fontFamily: 'Lobster' }}>Ferofly</h1>
            <h3 style={{ fontFamily: 'Open Sans Condensed' }}>-Magnify your Journey-</h3>
            <div className="my-5"></div>
            <img src={img} style={{ height: "650px" }} className="img-fluid animated" alt="demo" />
        </div>
        </section>
    </>)
}
export default Home;