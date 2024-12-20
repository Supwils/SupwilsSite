import React from 'react';
import emailjs from 'emailjs-com';

const Email = () => {
    // Initialize EmailJS
    React.useEffect(() => {
        emailjs.init("XT0i9ln5UAkdi5Th3"); // Replace with your user ID from EmailJS
    }, []);

    const sendEmail = () => {
        const templateParams = {
            to_name: "Huahao Shang",
    to_email: "huahaoshang2000@gmail.com",
    subject: "Test Email",
    message: "This is a test email sent from Node.js!",
    from_name: "Wilson",
    reply_to: "wilson@career.abc.com"
        };

        emailjs.send("service_86jznw1", "template_g5tm5ix", templateParams)
            .then((response) => {
                console.log("Email sent successfully!", response.status, response.text);
            }, (error) => {
                console.error("Failed to send email.", error);
            });
    };

    return (
        <div>
            <button onClick={sendEmail}>Send Email</button>
        </div>
    );
};

export default Email;