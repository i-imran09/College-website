import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d4600ff7-6088-4639-bade-fde386c628ff");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div className="contact" id='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem fugiat
                 iure nam obcaecati aperiam ab recusandae officiis reiciendis! Nihil, cupiditate!</p>
        <ul>
            <li><img src={mail_icon} alt="" /> Contact@Greatstack.dev</li>
            <li><img src={phone_icon} alt="" />+91 7397677968</li>
            <li><img src={location_icon} alt="" />21/31 mosuqe lane street arakkonam<br/>Ranipet-Tamilnadu</li>
            </ul>
        </div>
        <div className="contact-col">
        <form onSubmit={onSubmit} >
                <label >Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label >Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Mobile number' required/>
                <label >Write Your message here</label>
                <textarea name="message"  rows="6" placeholder='Enter your msg' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact