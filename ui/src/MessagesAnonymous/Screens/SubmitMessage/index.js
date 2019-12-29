import React, { useEffect } from "react";

function SubmitMessage(props) {
  let params = new URL(document.location).searchParams;
  let referee = params.get("ref");
  return <SubmitMessageContainer>
    
  </SubmitMessageContainer>;
}
export default SubmitMessage;
