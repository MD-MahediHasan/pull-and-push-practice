import React from "react";
import{Container,Row,Col} from "reactstrap";
import Todos from "./Components/To Do"

function App(){
    return(
        <Container>
            <Row>
                <Col>
                   <Todos/>
                </Col>
            </Row>
            <h1>This is Push and Pull</h1>
        </Container>
    )
}
export default App;