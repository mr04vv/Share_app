
export const RegisterType = 'REGISTER';

export const register = (status) => {
    return {
        type: RegisterType,
        payload: {
            status
        }
    }
};

export const registerAction = (name,password,confirm) => {


    console.log(name);
    console.log(password);
    console.log(confirm);

    return {
        type: RegisterType,
        payload: {
            name
        }
    };
};
