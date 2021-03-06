import React, {Component} from 'react';
import { Row } from '../app/app.js';
import {
    PersonDetails, 
    PersonList
} from '../sw-components';

export default class PeoplePage extends Component {
    state = {
        selectedItem: 3
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const {selectedItem} = this.state;
        return (
            <Row
            left={<PersonList onItemSelected={this.onItemSelected} />}
            right={<PersonDetails id={selectedItem} />} >
        </Row>
        )
    }
}