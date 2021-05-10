import React, { useState } from "react";

const ContactForm = ({loading, onSubmit}) => {
const [name, setName] = useState("");
const [message, setMessage] = useState("");

    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({name, message});
    };
    
        return (<form onSubmit={handleSubmit}>
            <label id="name">
                Name:
                <input onChange= {(event) => setName(event.target.value)} value={name} type="text" id="name" required />
            </label>
            <label id="message">
                Message:
                <textarea rows="3" cols="50" onChange= {(event) => setMessage(event.target.value)} value={message} type="text" id="message" required />
            </label>
            <button type="submit">{loading ? "Loading" : "Send"}</button>
        </form>
    )
}
export default ContactForm;