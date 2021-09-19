import { Div, Row, Text } from "atomize";
import { useState } from "react";

function SingleMessage (props) {

    const [message, setMessage] = useState(props);

    return(
        <Div border="1px solid" m="4rem">
            <Row m="1rem" justify="right">
                <Text textColor="light">{message.message.createdAt}</Text>
            </Row>
            <Row m="1rem">
                <b>{message.message.username}</b>: {message.message.content}
            </Row>
        </Div>
    )

}

export default SingleMessage;