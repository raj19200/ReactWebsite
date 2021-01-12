import React from 'react';
function Contact(){
    return(<>
    <section id="contact">
    <br/>
       <br/>
       <br/>
         <div className="container-fluid mt-5 text-center" style={{backgroundColor:"lightgray"}}>
         <br/>
       <br/>
       
       <br/>
       <br/>
        <h1 style={{ fontFamily: 'Open Sans Condensed'}}>CONTACT US</h1>
        <p className="mt-5">info@mysite.com<span style={{marginLeft:"5em"}}></span>500 Terry Francois Street, San Francisco, CA 94158<span style={{marginLeft:"5em"}}></span>Tel: 123-456-7890 </p>
        <div className="container mt-4">
        <form>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Name*"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Email*"/>
                </div>
            </div>
            <div className="mt-3">
            <input type="text" className="form-control" placeholder="Subject"/>
            </div>
            <div className="mt-3">
            <textarea class="form-control" placeholder="Message*" rows="4"></textarea>
            </div>
            <div className="mt-3">
            <button type="submit" class="btn btn-dark mb-2 form-control">Send</button>
            </div>
            </form>
        </div>
         </div>
         </section>
    </>)
}
export default Contact;