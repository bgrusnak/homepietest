import React from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
export default class App extends React.Component {
    render() {
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <Container>
                    <Row>
                        <Col style={{ background: '#2020ff' }} xs="2" sm="2">
                            <Nav vertical>
                                <NavLink href="/" style={{ color: '#eeeeee' }}>Pages</NavLink>
                            </Nav>
                        </Col>
                        <Col xs="10" sm="10">{this.props.children}</Col>
                    </Row>
                </Container>
            </DragDropContextProvider>
        );
    }
}
