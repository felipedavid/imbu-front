import React from "react";

class InputProps {
    className?: string;
    type?: string;
    placeholder?: string = "";
    labelText?: string;
    leftIcon?: React.ReactNode;
    errMsg?: string;
}

function LoginInput(props: InputProps) {
    const {className, placeholder, labelText, type, leftIcon, errMsg} = props;

    function renderErrMsg() {
        if (!errMsg) return;

        return (
            <div className="label">
                <span className="label-text-alt text-error text-md">{errMsg}</span>
            </div>
        );
    }

    return (
        <label className={`form-control ${className}`}>
            {labelText && 
                <div className="label">
                    <span className="label-text">{labelText}</span>
                </div>
            }  
            <label className={`input input-bordered flex items-center gap-2 ${errMsg && "input-error"}`}>
                {leftIcon}
                <input type={type} className="grow" placeholder={placeholder}/>
            </label>
            {renderErrMsg()}
        </label>
    );
}

export default LoginInput;