import React, { useEffect } from "react";
import { SubmitMessageContainer, ProfilePic, UserName, Question, Message, SubmitButton, BackButton } from './styles';
import back from './back.png'
function SubmitMessage(props) {
  let params = new URL(document.location).searchParams;
  let referee = params.get("ref");
  return <SubmitMessageContainer>
    <ProfilePic>
      <img src="face.png" width="100" height="100"></img>
    </ProfilePic>
    <UserName>
      John Doe
    </UserName>
    <Question>
      <div>
        Blah blah blah blah blah
      </div>
    </Question>
    <Message>
      <textarea rows="4" cols="50" autoFocus wrap="hard">
      </textarea>
    </Message>
    <SubmitButton>
      <button style={{ backgroundColor: '#63360D', color: "#fff" }}>SUBMIT</button>
    </SubmitButton>
    <BackButton>
      <img src={back} style={{ width: 30, height: 30, bottom: 0, right: 0, position: 'absolute' }} />
    </BackButton>
  </SubmitMessageContainer>;
}
export default SubmitMessage;
