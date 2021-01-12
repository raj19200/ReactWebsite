import React from 'react';
import background from './img/2.webp'

function Room() {
    return (<>
        <section id="Room">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container mt-5 text-center " style={{ backgroundImage: `url(${background})`, height: "600px" }}>
            <div className="container">
                <div className="card" style={{width: "50%",height:"50%" ,marginLeft:"25%"}}>
                    <div className="card-body">
                        <h5 className="card-title mt-4">OUR ROOMS</h5>
                        <p className="card-text mt-4">I'm a paragraph. Click here to add your<br/> own text and edit me. I’m a great place<br/> for you to tell a story and let your users <br/>know a little more about you.</p>
                        <button type="button" class="mt-4 btn btn-outline-dark">Book a Room</button>
                    </div>
                </div>
                </div>
            </div>

        </section>

    </>)
}
export default Room;