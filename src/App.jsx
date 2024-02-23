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
         
        </Container>
    )
}
export default App;