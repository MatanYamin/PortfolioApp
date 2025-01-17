import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors }} = useForm();
    
    const servicesID = 'service_matanyamin';
    const templatID = 'template_cg56vd9';
    const userID = 'user_UvVe7aKF3U2tgzVmusowr';

    const onSubmit = (data, r) => {
        sendEmail(
            servicesID,
            templatID,
            {
                name: data.name,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
            )
            r.target.reset()
    }

    const sendEmail = (servicesID, templatID, variables, userID) => {
        emailjs.send(servicesID, templatID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully!")
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
            <h1>Contact Us</h1>
            <p>Have questions or need support? Reach out to us—we’re happy to help!</p>

            <span className="success-message">{successMessage}</span>         
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">
                        <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        {...register("name", {
                            required: "Please enter your name.",
                          })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        {/* EMAIL INPUT */}
                        <div className="text-center">
                        <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        {...register("email", {
                            required: "Please enter your email.",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid Email"
                            }
                          })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        {/* SUBJECT INPUT */}
                        <div className="text-center">
                        <input
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        {...register("subject", {
                            required: "Please enter your subject.",
                          })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <div className="text-center">
                        <textarea
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        {...register("description", {
                            required: "Please enter your description.",
                          })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button
                        className="btn-main-offer contact-btn"
                        type="submit">Send</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
