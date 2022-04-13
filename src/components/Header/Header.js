import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <section>
                 <Container className="header">
                     <h1>GIFs Generator</h1>
                     <h3>Type text into the form and hit submit</h3>
                 </Container>
            </section>

        );
    }
}

export default Header;