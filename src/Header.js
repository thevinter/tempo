import React, { useEffect } from "react";
import {Container, Text, Row, Col, Icon} from 'atomize';
import { useState } from "react";

function Header (props) {


    const [userState, changeUserState] = useState(props) 

    useEffect(() => {
        changeUserState(props);
        console.log(props);
    }, [props]);

    return (
            <Row m="2rem">
                <Col justify="left" size="1">
                    <Icon name="Timestamp" size="20px" />
                </Col>
                <Col size="10">
                    welcome {userState.username}!
                </Col>
                <Col justify="right" size="1">
                    <Icon name="Add" size="20px" />
                </Col>
            </Row>
    )
}

export default Header;