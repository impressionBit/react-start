import React from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {upload} from 'app/axios/url';
import {FormattedMessage, injectIntl} from 'react-intl';

export class UploadLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: undefined
        };

        this.dropHandler = this.dropHandler.bind(this);
    }

    dropHandler(file) {
        const jsonFile = new FormData();
        jsonFile.append('file', file[0]);
        jsonFile.append('name', file[0].name);

        request.post(upload)
            .send(jsonFile)
            .then(response => {
                this.setState({image: response.text})
            });
    }

    render() {
        const {image} = this.state;
        return (
            <div>
                <Jumbotron>
                    <h5><FormattedMessage id='app.page.upload.text'/></h5>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col xs="4">
                            <Dropzone
                                disableClick={false}
                                multiple={false}
                                accept={'image/*'}
                                onDrop={this.dropHandler}>
                                <div style={{margin: '20px'}}><FormattedMessage id='app.upload.input.message'/></div>
                            </Dropzone>
                        </Col>
                        <Col xs="8">
                            {image ? (<img src={`data:image/jpg;base64,${image}`} width='500px' alt="image" />) : (<div />)}
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default injectIntl(UploadLayout);