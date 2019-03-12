import React from 'react';
import {
    Button,
    Container,
    Jumbotron,
    Input,
    Row,
    Col,
} from 'reactstrap';
import {injectIntl, intlShape} from 'react-intl';
import {objectFromServer} from 'app/constants/testConstant';
import Slider from 'rc-slider';
import *as testService from 'app/service/testService';
import 'rc-slider/assets/index.css';

export class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        const list = objectFromServer;

        this.state = {
            count: 1,
            list,
            items: testService.correctPercent(list[1].Items),
        };
    }

    render() {
        const {intl} = this.props;
        const {count, items, list} = this.state;

        const styleSlider = {marginTop: 12};

        const newItems = (items, item, value, isString) => (
            [...items.map(it => it.Name === item.Name ?
                {
                    Name: item.Name,
                    Percent: isString ? parseFloat(value) : value,
                    String: isString ? value : value.toString()
                } : it)]
        );

        return (
            <Container>
                <Row>
                    <Col xs="8">
                        <Row>
                            {Object.keys(list).map((item, index) =>
                                <Col key={index} xs="2">
                                    <Button color="primary" onClick={() => {
                                        this.setState(
                                            {count: index, items: testService.correctPercent(list[index].Items)}
                                        )
                                    }}>
                                        {intl.formatMessage(
                                            {id: 'app.test.button'},
                                            {key: index + 1}
                                        )}
                                    </Button>
                                </Col>
                            )}
                        </Row>
                        <br/>
                        <br/>
                        {items.map((item, thisIndex) =>
                            <Row key={`Row-${item.Name}`} style={styleSlider}>
                                <Col xs="2">
                                    <div>{item.Name}</div>
                                </Col>
                                <Col xs="8">
                                    <Slider
                                        key={`Slider-${item.Name}-${thisIndex}`}
                                        min={0}
                                        max={100}
                                        step={0.01}
                                        value={item.Percent}
                                        style={styleSlider}
                                        type="number"
                                        onChange={value => {
                                            this.setState(
                                                {
                                                    items:
                                                        testService.normalizationPercent(
                                                            newItems(items, item, value, false),
                                                            thisIndex)
                                                }
                                            )
                                        }}
                                    />
                                </Col>
                                <Col xs="2">
                                    <Input
                                        key={`Input-${item.Name}-${thisIndex}`}
                                        value={item.String}
                                        onChange={value => {
                                            const newValue = testService.formatNumber(
                                                value.target.value, item ? item.String : '0');
                                            this.setState({
                                                items: testService.normalizationPercent(
                                                    newItems(items, item, newValue, true),
                                                    thisIndex)
                                            })
                                        }
                                        }/>
                                </Col>
                            </Row>
                        )}
                    </Col>
                    <Col xs="4">
                        <Jumbotron>
                            <pre style={{fontSize: '12px'}}>
                                {JSON.stringify(list[count].Items, null, '\t')}
                                </pre>
                        </Jumbotron>
                    </Col>
                </Row>
                <br/>
                <br/>


            </Container>
        );
    }
}

TestComponent.propTypes = {
    intl: intlShape.isRequired
};

export default injectIntl(TestComponent);