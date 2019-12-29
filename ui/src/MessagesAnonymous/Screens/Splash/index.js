import React,{useEffect} from 'react';
import { SplashContainer, Messages, Anonymous } from './styles';

function Splash(props){
    useEffect(() => {
        document.addEventListener('FB Stuff Loaded',()=>{
            window.FB.getLoginStatus(function(response) {
                debugger;
                if(response.status==="connected"){
                    if(props.location.search){
                        props.history.push("submitMessage"+props.location.search);
                    }
                    else{
                        props.history.push("submittedMessages");
                    }
                }
                else{
                    props.history.push("login"+props.location.search);
                }
            });
        })
    }, []);
    return <SplashContainer>
        <Messages>Messages</Messages>
        <Anonymous>Anonymous</Anonymous>
    </SplashContainer>
}

export default Splash;