import { useEffect, useState } from "react";
import ApiService from "../Services/ApiService";
import SingleMessage from "./SingleMessage";
import {Row, Col, Div, Button, Textarea} from 'atomize'

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
                (result) => setMessageInput(messageInput.concat(result))
            )
        }
    }

    return(
        <Div>
            <Row m ={{x:"4rem"}}>
            <Col >
            <Textarea 
                right="0"
                placeholder="Submit"
                border="1px solid"
                value={messageInput}
                borderColor="black"
                onChange={evt => setMessageInput(evt.target.value)}
            />
            </Col>
            </Row>
            <Row flexDir="row-reverse" m={{x:"4rem"}}>
            <Button
                onClick={() => submitMessage()}
                bg="black"
                hoverBg="info800"
                border="1px solid"
                >
                    Send
                </Button>
                </Row>
            {messageList}
        </Div>
    )

}

export default MessageList;