
import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [dataHref , setDataHref] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = dataHref;
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setDataHref("mailto:anafalkdesign@gmail.com?subject=" + formData.name +"&body="+ formData.message )

    };

    return (
        <div className="bg-bgColor pt-10 pb-10" id="Contact">
            <div className="container">
                <p className="text-primary-color text-[40px]">Get in touch</p>
                <h1 className="text-primary-color  text-[70px]">
                    Don't be a <br /> stranger! <br /> Say hi!
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <form className="space-y-3 col-span-2" onSubmit={handleSubmit}>
                        <input required type={"text"} name="name" onChange={handleChange}  className="rounded-lg border-2 border-solid border-second-color py-2.5 px-4 text-xl w-full" placeholder="Name" />
                        <input  required type={"email"} name="email" onChange={handleChange} className="rounded-lg border-2 border-solid border-second-color py-2.5 px-4 text-xl w-full" placeholder="Email" />
                        <textarea required name="message" onChange={handleChange} className="rounded-lg border-2 border-solid border-second-color py-2.5 px-4 text-xl w-full h-[200px]" placeholder="Write a message"></textarea>
                        <button type="sumbit" className="bg-primary-color border border-solid border-primary-color text-white font-semibold hover:text-primary-color hover:bg-white duration-500 py-2.5 px-4 rounded-xl">Send to message</button>
                    </form>
                    <div className="boxes">
                        <div className="box mb-5 p-10 bg-second-color rounded-[40px] text-white text-center">
                            <h1 className="text-[20px] font-semibold mb-3">Email  <br /> anafalkdesign@gmail.com</h1>
                            
                        </div>
                        <div className="box  mb-5 p-10 bg-second-color rounded-[40px] text-white text-center">
                            <h1 className="text-[20px] font-semibold mb-3">WhatsApp</h1>
                            <p className="text-[20px] font-semibold mb-3"> +4677 777 77 77</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Contact;