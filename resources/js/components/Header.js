import React, { Component } from 'react';
import {AppProvider, Button} from '@shopify/polaris';
export default class Header extends React.Component {
    render() {
        return (
                <AppProvider>
                    <Button onClick={() => alert('Button clicked!')}>Example button</Button>
                </AppProvider>
        );
    }
}
