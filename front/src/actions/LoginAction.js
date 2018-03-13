
export const EmailType = "EMAIL";
export const PassType = "PASSWORD";
export const LoginType = "LOGIN";
export const LogoutType = "LOGOUT";
export const ErrorType = "ERROR";

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
    };
};

export const login = (isLogin) => {
    return {
        type: LoginType,
        payload: {
            isLogin
        }
    }
};

export const logout = (isLogin,email) => {
    return {
        type: LogoutType,
        payload: {
            isLogin,
            email
        }
    }
};

export const setError = (error) => {
    return {
        type: ErrorType,
        payload: {
            error
        }
    }
};


