import React from 'react'

export const EmailType = "EMAIL";
export const PassType = "PASSWORD";

export const inputEmail = (email) => {
    return {
        type: EmailType,
        payload: {
            email
        }
    };
};

export const inputPassword = (password) => {
    return {
        type: PassType,
        payload: {
            password
        }
    }
};


