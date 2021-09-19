// Show Hide Password
import { Input, Button, Text, Icon, Row, Container, Col, Div } from "atomize";
import React, {Component, useState} from 'react';
import { useHistory } from "react-router-dom";
import ApiService from '../Services/ApiService';

function LoginForm () {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [isRegister, setRegister] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory(); 


  function tryLogin() {
    ApiService.login(username, password).then(
      (response) => {
        if(response.data && response.data.message) console.log(response.data.message)
        else {
          history.push("/me");
        }
      }
    )
  }

  function tryRegister(){
    if(email == emailConfirm)
      ApiService.register(username, password, email)
  }

  
  const leftButton = isRegister ? "Submit" : "Login";
  const rightButton = isRegister ? "Login" : "Register";
  return (
    <Container p={{y: "10rem"}}>
        <Row justify="center" align="center">
          <Col d="flex" size="1" justify="flex-end">
              <Icon align="right" d="flex" name="Timestamp" size="30px" />
          </Col>
          <Col size="2" d="flex">
                <Text tag="h1" textSize="display1" >
                  tempo.
                </Text>
          </Col>
        </Row>
        <Row>
          <Col p="5rem" m="5rem">
              <Text tag="h2" textSize="body">the social that waits your time.</Text>
          </Col>
        </Row>
        <Row justify="center" m="2rem">
          <Col>
            <Input value={username} onChange={ evt => setUsername(evt.target.value) } size="3" placeholder="Username" />
          </Col>
          <Col>
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={ evt => setPassword(evt.target.value) }
              suffix={
                <Button
                  pos="absolute"
                  onClick={() => setShowPassword(!showPassword)}
                  bg="transparent"
                  w="3rem"
                  top="0"
                  right="0"
                  rounded={{ r: "md" }}
                >
                  <Icon
                    name={showPassword ? "EyeSolid" : "Eye"}
                    color={showPassword ? "danger800" : "success800"}
                    size="16px"
                  />
                </Button>
              }
            />
          </Col>
        </Row>
        {isRegister &&
        <Div>
          <Row justify="center" m="2rem">
          <Col>
            <Input value={email} onChange={ evt => setEmail(evt.target.value) } size="3" placeholder="e-mail" />
          </Col>
          <Col>
            <Input value={emailConfirm} onChange={ evt => setEmailConfirm(evt.target.value) } size="3" placeholder="confirm e-mail" />
          </Col>
          </Row>
        </Div>
        }
        <Row align="space-around" justify="center">
          <Col d="flex" justify= "flex-end">
          <Button
            textSize="body"
            textColor="dark"
            hoverTextColor="info900"
            bg="white"
            hoverBg="info200"
            border="1px solid"
            borderColor="dark"
            hoverBorderColor="info900"
            shadow="2"
            onClick={() => tryLogin()}
          >
            {leftButton}
          </Button>
          </Col>
          <Col>
          <Button
            textSize="body"
            textColor="dark"
            hoverTextColor="info900"
            bg="white"
            hoverBg="info200"
            border="1px solid"
            borderColor="dark"
            hoverBorderColor="info900"
            shadow="2"
            onClick={() => setRegister(!isRegister)}
          >
            {rightButton}
          </Button>
          </Col>
        </Row>
    </Container>
  );
}

export default LoginForm;
