import React, { useEffect } from "react";
import { SubmitMessageContainer, ProfilePic, UserName, Question, Message, submitButton } from './styles';

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
    <submitButton>
      <button style={{ backgroundColor: '#63360D', color: "#fff" }}>SUBMIT</button>
    </submitButton>
  </SubmitMessageContainer>;
}
export default SubmitMessage;
