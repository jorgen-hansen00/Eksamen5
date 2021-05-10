import { useState } from "react";
import { createContact } from "../utils/contactService";
import ContactForm from "./ContactForm";

const Contact = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const onSubmit = async (data) => {

        setLoading(true);
        setError(false);
        setSuccess(false);

        try {
            await createContact(data);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <ContactForm loading={loading} error={error} success={success} onSubmit={onSubmit} />
        
    )
}
export default Contact;