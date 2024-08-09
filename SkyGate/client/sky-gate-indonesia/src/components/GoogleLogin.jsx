import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function GoogleLogin() {
    const navigate = useNavigate()

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: async (response) => {
                console.log("Encoded JWT ID token: " + response.credential)
                const { data } = await axios.post('http://localhost:3000/auth/google', {
                    googleToken: response.credential,
                });
                localStorage.setItem('access_token', data.access_token);
                navigate('/')
            },
        });
        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: 'outline', size: 'large' },
        );
        google.accounts.id.prompt();
    }, []);

    return <div id="buttonDiv"></div>;
}

export default GoogleLogin;