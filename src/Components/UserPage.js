import { Div, Col, Icon, Text, Row, Button} from "atomize"
function UserPage () {
    return (
        <Div border="1px solid">
            <Row align="center">
                <Col size="auto" >
                    <Icon m={{x:"3rem"}} name="UserCircle" size="80px" />
                </Col>
                <Col align="center" size="auto" justify="flex-start">
                    <Row justify="flex-start">
                        <Text textColor="brand800" d ="flex"><b>Nikita</b></Text>
                    </Row>
                    <Row>
                        <Text d ="flex">Brancatisano</Text>
                    </Row>
                    <Row align="bottom" justify="flex-start" >
                        <Text textAlign="bottom" textColor="disabled" d ="flex">Registered: 18/09/21</Text>
                    </Row>
                </Col>
                <Col  size="auto" justify = "flex-start">
                    <Row  m={{x: "5rem"}}justify="flex-start" >
                        <Text><b>35</b> Followers</Text>
                    </Row>
                    <Row m={{x: "5rem"}}>
                        <Text><b>5</b> Following</Text>
                    </Row>
                </Col>
                <Col >
                <Row justify="flex-end" m={{x:"4rem", y:"2rem"}}>
                    <Button
                        m="4rem"
                        suffix={
                        <Icon
                            name="Heart"
                            size="16px"
                            color="white"
                            m={{ l: "1rem" }}
                        />
                        }
                        shadow="3"
                        hoverShadow="4"
                        m={{ r: "1rem" }}
                        minW="10rem"
                    >
                        Follow
                    </Button>
                </Row>
                <Row justify="flex-end" m={{x:"4rem",y:"2rem"}}>
                    <Button
                        suffix={
                        <Icon
                            name="Mail"
                            size="16px"
                            color="white"
                            m={{ l: "1rem" }}
                        />
                        }
                        minW="10rem"
                        shadow="3"
                        hoverShadow="4"
                        m={{ r: "1rem" }}
                    >
                        Message
                    </Button>
                    </Row>

                </Col>
            </Row>
        </Div>
    )
}

export default UserPage