import React, { useEffect } from "react";
import {
  LoginContainer,
  LoginText,
  LoginButton,
  LoginQA,
  LoginQ,
  LoginA
} from "./styles";
import FacebookLoginWithButton from "react-facebook-login";

function Login(props) {
  function responseFacebook(r) {
    if(r){
      debugger;
      window.localStorage["FB Data"]=JSON.stringify(r);
      if(props.location.search){
        props.history.push("submitMessage"+props.location.search);
      }
      else{
        props.history.push("submittedMessages");
      }
    }
  }
  return (
    <LoginContainer>
      <LoginText>Login via Facebook to continue</LoginText>
      <LoginButton>
        <FacebookLoginWithButton
          appId="2782837375282463"
          autoLoad
          fields="name,email,picture"
          callback={responseFacebook}
          icon="fa-facebook"
        />
        
      </LoginButton>
      <LoginQA>
        <LoginQ>Why log in on an anonymous messaging platform?</LoginQ>
        <LoginA>
          This is to reveal yourself to your the person who you sent the message
          to later, if you permit.
        </LoginA>
      </LoginQA>
    </LoginContainer>
  );
}

export default Login;
