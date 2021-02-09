 import React from 'react';
 import bow from '../Images/bow.svg';

const ContactPage = () => {
    return(
        <form> 
        <div className="contactBox">
         <div className="form"> 
            <h1 
            className="title"> Contact us! 
            <img 
            className="bow_img" src={bow}alt="bow"
             /> 
            </h1>

            
           <label for="name">Name: </label>
           <input
            type="text" 
            id="name" 
            name="name" 
            required /> 
           </div>
           <br />
           <div className="form"> 

           <label for="phone"> Phone: </label>
          <input type="tel"
            id="phone" name="phone"
            placeholder=" (704)555-5555" 
            pattern="[0-9]{3}())[0-9]{3}-[0-9]{4}" 
            required />
           <br />
        
           <div className="form"> 
           <input type="radio" 
           id="mobile" name="type" 
           value="mobile" /> 
        <label for="mobile">Mobile</label>
        <input type="radio" 
              id="home" 
              name="type" 
              value="home" />

        <label for="home">Home</label>
        <input type="radio" 
                id="work" 
                name="type" 
                value="work" 
                />

             <label for="work">Work</label>
             </div>
             </div>
          <br />
          
           <div className="form"> 
           <label for="email"> Email: </label>
          <input type="email" 
                  id="email" 
                  name="email" 
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                  required 
                  />
          </div>
          <br />
             
          <div className="form">
             <label for="rate">How was your experience?</label>
        <select id="rate" 
                name="rate">
        <option value="select" 
                selected>Select</option>
          <option value="nice">Nice</option>
          <option value="awesome">Awesome</option>
          <option value="great">Great</option>
        </select> </div> 
        <br />
         
           <div className="form"> 
           <label for="textarea"> </label> 
           <br />
        <textarea id="textarea" 
                  rows="10" cols="45" 
                  placeholder="  Leave us a question or comment!">
                    </textarea>
                    </div> 
                    <br /> 
          
          <div className="form"> 
          <input className="submit_button" 
          type="submit" 
          />
           </div>
            </div> 
        </form>
    );
}

export default ContactPage;
