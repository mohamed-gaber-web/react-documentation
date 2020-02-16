import React from 'react'
import './Contact.styles.css';

import { Formiz, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations' // Import some validations
import { isNumber } from '@formiz/validations'; // import isNumber

import { MyField } from '../../MyField'; // Import your 


const ContactPage = (props) => {
    const myForm = useForm();

    const handleSubmit = (values) => { 
        console.log(values);
    }

    return (
        <div className="container">
            <h1 className="title"> Contact Page </h1>
            <Formiz
                connect={myForm}
                onValidSubmit={handleSubmit}
            >
            <form
                noValidate
                onSubmit={myForm.submit}
            >
                <MyField
                name="firstName"
                label="First Name"
                required="First Name is required"
                className="style__input"
                />
                <MyField
                name="lastName"
                label="Last Name"
                required="Last Name is required"
                className="style__input"
                />
                    
                <MyField
                name="phone"
                type="number"        
                label="phone"
                required="Phone is required"
                className="style__input"
                validations={[
                    {
                        rule: isNumber(),
                        message: 'This is not a valid number'
                    }
                ]}
                />
                    
                <MyField
                name="email"
                label="Email"
                className="style__input"
                validations={[
                    {
                    rule: isEmail(),
                    message: 'This is not a valid email',
                    },
                ]}
                />
                <button className="contact_button" type="submit" disabled={!myForm.isValid}>
                    Submit
                </button>
            </form>
            </Formiz>
        </div>
    );
}

export default ContactPage;