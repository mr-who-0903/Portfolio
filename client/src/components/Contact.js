import React, {useState} from 'react'
import '../css/Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';


const Contact = () => {

    const [data, setData] = useState({
        username:"", email:"", message:""
    });

    const onChangeFunc = (event) =>{
        const {name, value} = event.target;
        setData({...data, [name]:value});
    }


    const postMessage = async(event) =>{
        event.preventDefault();

        const { username, email, message } = data;
    
        const res = await fetch("/contact", {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                username, email, message
            })
        });

        const received_data = await res.json();

        if(res.status === 422 || !data){
            toast.error(received_data.error, 
                {position: "top-center",
                autoClose: 5000});
        }
        else if(res.status === 401){
            toast.error(received_data.error, 
                {position: "top-center",
                autoClose: 5000});
        }
        else if(res.status === 201){
            
            toast.success(received_data.message, 
                {position: "top-center",
                autoClose: 5000});
            
            setData({username:"", email:"", message:""});
        }
    }

    return (
        <div className="contact-main-div" id="contact">
            <div className="contact-sub-div" data-aos="fade-up">
                <h1>CONTACT</h1>
                <hr className="underline"/>
                <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
            </div>
            <div className="form-div">
                <div className="form" data-aos="fade-up">
                    <h6>Name</h6>
                    <input 
                        type="text"
                        className="form-control"
                        name="username" 
                        value={data.username} 
                        onChange={onChangeFunc} 
                        placeholder="Name" 
                        autoComplete="off" />

                    <h6>Email</h6>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="email" 
                        value={data.email} 
                        onChange={onChangeFunc} 
                        placeholder="Email" 
                        autoComplete="off" />

                    <h6>Message</h6>
                    <textarea 
                        rows="4" 
                        type="text" 
                        className="form-control" 
                        name="message" 
                        value={data.message} 
                        onChange={onChangeFunc} 
                        placeholder="Message" 
                        autoComplete="off" />

                    <div className="form-btn">
                        <button type="button" className="btn" onClick={postMessage}><b style={{letterSpacing:"2px"}}>SUBMIT</b></button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Contact
