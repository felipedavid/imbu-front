import { IconLockFilled, IconUserFilled } from "@tabler/icons-react";
import LoginInput from "./components/LoginInput";
import LoginButton from "./components/LoginButton";
import { useReducer } from "react";

class LoginFormState {
    email: string = "";
    password: string = "";
    emailErrMsg: string = "";
    passwordErrMsg: string = "";
    loading: boolean = false;
}

type LoginFormAction =
    | { type: "LOGIN_REQUEST" }
    | { type: "LOGIN_FAILURE" };

function LoginFormReducer(state: LoginFormState, action: LoginFormAction) {
    switch (action.type) {
    case "LOGIN_REQUEST":
        return {...state, loading: true}; 
    case "LOGIN_FAILURE":
        return {...state, loading: false};
    }
}

function LoginPage() {
    const [state, dispatch] =  useReducer(LoginFormReducer, new LoginFormState());

    function handleLogin() {
        dispatch({type: "LOGIN_REQUEST"});
        console.log("Login clicked");
    }

    return (
        <div>
            <LoginInput type="email" placeholder="your@gmail.com" labelText="Email" leftIcon={
                <IconUserFilled size={20}/>
            }/>
            <LoginInput type="password" placeholder="yourpassword" labelText="Password" leftIcon={
                <IconLockFilled size={20}/>
            }/>
            <LoginButton onClick={handleLogin} text="Login" loading={state.loading} />
        </div>
    )
}

export default LoginPage;