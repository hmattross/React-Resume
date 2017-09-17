import React from 'react';
import { Modal, Jumbotron, Button } from 'react-bootstrap';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showModal: true}
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({showModal: false});
    }

    render() {
        return(
            <Modal show={this.state.showModal} bsSize="large" autoFocus={true} dialogClassName="custom-modal">
                <Modal.Body>
                    <div className="container-fluid">
                        <Jumbotron>
                            <div>
                                <h1>Hey There!</h1>
                            </div>
                            <div>
                                <p>Thank you for taking a second to look at my resume.</p>
                            </div>
                            <div className="container text-right">
                                <Button bsStyle="primary" onClick={this.onClick}>Learn More</Button>
                            </div>
                        </Jumbotron>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default Greeting;