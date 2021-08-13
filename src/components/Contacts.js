import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import config from "../configur";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors }} = useForm();
    
    const servicesID = config.servicesID;
    const templatID = config.templatID;
    const userID = config.userID;

    const onSubmit = (data, r) => {
        sendEmail(
            servicesID,
            templatID,
            {
                name: data.name,
                phone: data.phone,
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
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.")
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div className="contacts">
            <div className="text-center">
            <h1>Contact Me</h1>
            <p>Please Fill out The Form and describe your request</p>   
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
                        {/* PHONE INPUT */}
                        <div className="text-center">
                        <input
                        id="phone"
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        {...register("phone", {
                            required: "Please enter your phone.",
                          })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
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
                        type="submit">Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
