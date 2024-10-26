
class LoginButtonProps {
    text: string = "";
    loading?: boolean;
    onClick?: (() => void);
}

function LoginButton(props: LoginButtonProps) {
    const {onClick, text, loading} = props;

    return (
        <button className={`btn ${loading && "btn-disabled"}`} onClick={onClick}>
            {loading ?
                <span className="loading loading-dots loading-md"></span> :
                text
            }
        </button>
    );
}

export default LoginButton;