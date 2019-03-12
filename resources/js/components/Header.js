import React, { Component } from 'react';
import {AppProvider, Button} from '@shopify/polaris';
export default class Header extends Component {
    render() {
        return (
            <div>
                Header
                <AppProvider>
                    <Button onClick={() => alert('Button clicked!')}>Example button</Button>
                </AppProvider>
            </div>
        );
    }
}
