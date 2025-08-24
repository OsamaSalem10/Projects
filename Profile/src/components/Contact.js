import React, { useState } from 'react';
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser';
export const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMassage] = useState("")
    const [loading, setLoading] = useState(false)
    return (
        <section className="section__container contact__container" id="contact">
            <p className="section__subheader">Contact Us</p>
            <h2 className="section__header">Get In Touch</h2>
            <div className="contact__form">

                <input type="text" placeholder="Name" name='name' onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" name='email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Description" name="message" onChange={(e) => setMassage(e.target.value)} />
                <button className="btn"
                    onClick={(e) => {
                        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                        e.preventDefault();
                        setLoading(true)
                        setTimeout(() => {
                            if (name === "") {
                                toast.error("Enter To Name")
                                setLoading(false)
                            } else if (!emailRegex.test(email)) {
                                toast.error("Enter To Email")
                                setLoading(false)
                            } else if (message === "") {
                                toast.error("Enter To Email")
                                setLoading(false)
                            } else {
                                let data1 = { user_name: name, user_email: email, message: message }
                                emailjs.send('service_pyguoec', 'template_airpmzr', data1, 'DUOrlJz1ktRqkBB2k')
                                .then(function (response) {
                                    toast(`The message was sent correctly`)

                                }, function (err) {
                                    toast.error(`Internal Server Error`)
                                });                            
                            }
                        }, 1000)
                    }}
                >
                    {!loading && <span className="indicator-label">Submit</span>}
                    {loading && <span className="indicator-progress">Please wait...</span>}
                </button>
            </div>
        </section>
    );
}

