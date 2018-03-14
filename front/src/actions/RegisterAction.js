
export const RegisterType = 'REGISTER';

export const register = (email, password, confirmPass) => {
    return {
        type: RegisterType,
        payload: {
            email,
            password,
            confirmPass
        }
    }
};
