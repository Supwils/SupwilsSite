import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        emailSubject: '',
        message: ''
    });

    const [validationMessage, setValidationMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, email, message } = formData;

        if (!fullName || !email || !message) {
            setValidationMessage('Please fill in all required fields: Full Name, Email, and Message.');
            setTimeout(() => {
                setValidationMessage('');
            }, 3000);
        } else {
            setValidationMessage('');
            // Send email using EmailJS
            emailjs.send('service_86jznw1', 'template_jkvirwl', formData, 'XT0i9ln5UAkdi5Th3')
                .then((response) => {
                    // console.log('SUCCESS!', response.status, response.text);
                    setValidationMessage('Message sent successfully!');
                    setTimeout(() => {
                        setValidationMessage('');
                    }, 3000);
                }, (err) => {
                    // console.log('FAILED...', err);
                    setValidationMessage('Failed to send message. Please try again later.');
                    setTimeout(() => {
                        setValidationMessage('');
                    }, 3000);
                });
        }
    };

    return (
        <div>
            <section className="contact" id="contact">
                <h2 className="heading">Contact <span>Me!</span></h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="number"
                            name="mobileNumber"
                            placeholder="Mobile Number"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="emailSubject"
                            placeholder="Email Subject"
                            value={formData.emailSubject}
                            onChange={handleChange}
                        />
                    </div>
                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <input type="submit" value="Send Message" className="btn" />
                    {validationMessage && <span className="validation-message">{validationMessage}</span>}
                </form>
            </section>
        </div>
    );
};

export default Contact;