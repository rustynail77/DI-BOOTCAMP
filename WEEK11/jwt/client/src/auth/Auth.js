import {useState,useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {AppContext} from '../App';

export const Auth = (props) => {
    const [redirect,setRedirect] = useState(false);
    const navigate = useNavigate();
    const {accessToken,setAccessToken} = useContext(AppContext);

    useEffect(() =>{
        const verify = async () => {
            console.log('access ver:',accessToken);
            try {
                const response = await axios.get('/token',{
                    withCredentials:true,
                    headers: {
                        'Access-Control-Allow-Origin':'*',
                        'Content-Type': 'application/json',
                        'x-access-token' : accessToken
                    }
                });
                setAccessToken(response.data.accessToken);
                setRedirect(true);
            } catch (e) {
                console.log(e.response.data.msg);
                // navigate('/login');
            }            
        }
        verify();
    },[])

    return (
        redirect ? props.children : null
    )
}

export default Auth;