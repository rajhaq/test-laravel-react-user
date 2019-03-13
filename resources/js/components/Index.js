import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import UserList from './UserList';
import { AppProvider,Layout,Page} from '@shopify/polaris';
export default class Index extends Component {
    
    render() {
        return (
            <AppProvider>
                <Page
                    singleColumn
                    title="USER LIST"
                >
                    <Layout>
                        <Layout.Section>
                            {/* <Header/> */}
                                    <UserList/>
                            {/* <Footer/> */}
                        </Layout.Section>
                    </Layout>
                </Page>

            </AppProvider>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
