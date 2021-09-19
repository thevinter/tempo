import { useState } from "react";

function SingleMessage (props) {

    const [message, setMessage] = useState(props);

    return(
        <h1>{message.message.content}</h1>
    )

}

export default SingleMessage;