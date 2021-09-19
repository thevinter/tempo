import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import ApiService from "./Services/ApiService";
import SingleMessage from "./SingleMessage";

function MessageList() {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        ApiService.getMessages().then((result) => {
            setMessages(result);
        })
    },[])
    
    const messageList = messages.map((m, i) => <SingleMessage key={i} message={m}/>);

    return(
        <div>
        {messageList}
        </div>
    )

}

export default MessageList;