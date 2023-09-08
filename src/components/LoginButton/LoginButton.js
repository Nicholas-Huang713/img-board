import {GoogleLogin} from 'react-google-login';

const clientId = "798778873798-seceoqhfukvss64t2o7u5iufrb9ckn0m.apps.googleusercontent.com";

function LoginButton() {
    const onSuccess = (res) => {
        console.log("Login Success! Current user: ", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("Failed Login! res: ", res)
    }
    return (
        <div>
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default LoginButton;