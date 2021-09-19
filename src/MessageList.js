import { useEffect, useState } from "react";
import ApiService from "./Services/ApiService";
import SingleMessage from "./SingleMessage";
import {Input, Button} from 'atomize'

function MessageList() {

    const [messages, setMessages] = useState([])
    const [messageInput, setMessageInput] = useState("")

    useEffect(() => {
        ApiService.getMessages().then((result) => {
            setMessages(result);
        })
    },[])
    
    const messageList = messages.map((m, i) => <SingleMessage key={i} message={m}/>);

    const submitMessage = () => {
        if(messageInput.length > 0){
            let message = {message: messageInput, tags: []}
            ApiService.sendMessage(message).then(
                (result) => console.log(result)
            )
        }
    }

    return(
        <div>
            <Input m ="4rem"
                placeholder="Submit"
                border="1px solid"
                value={messageInput}
                borderColor="black"
                onChange={evt => setMessageInput(evt.target.value)}
                suffix={
                    <Button
                        pos="absolute"
                        onClick={() => submitMessage()}
                        bg="black"
                        hoverBg="info800"
                        top="0"
                        right="0"
                        border="1px solid"
                        rounded={{ r: "md" }}
                        >
                            Search
                        </Button>
                }
            />
            {messageList}
        </div>
    )

}

export default MessageList;