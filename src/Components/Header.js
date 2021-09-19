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
            <Row align="center" m={{x: '3.5rem', y: '2rem'}}>
                <Col textAlign="left" justify="flex-start" size="1">
                    <Icon name="Timestamp" size="20px" />
                </Col>
                <Col align="center" textAlign="right" size="10" >
                    <Text justify="flex-end">welcome {userState.username}!</Text>
                </Col>
                <Col textAlign="right" size="1">
                    <Icon name="Add" size="23px" />
                </Col>
            </Row>
    )
}

export default Header;