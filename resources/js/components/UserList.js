import React, { Component } from 'react';
import axios from 'axios';
import {AppProvider,TextStyle, Avatar, Card, ResourceList} from '@shopify/polaris';

export default class UserList extends Component {
    constructor()
    {
        super();
        this.state={
            users:[],
            loading:true
        }

    }
    componentDidMount()
    {
        axios.get('/user')
        .then(response=>{
            this.state.loading=false
            this.setState({users:response.data})
            
        });
    }
    render() {
        return (
            <AppProvider>
                <Card>
                    <ResourceList
                        loading={this.state.loading}
                        items={this.state.users}
                        renderItem={(item) => {
                        const {id, name, email} = item;

                            return (
                                <ResourceList.Item
                                    id={id}
                                    email={email}
                                    accessibilityLabel={`View details for ${name}`}
                                    >
                                    <h3>
                                        <TextStyle variation="strong">{name}</TextStyle>
                                    </h3>
                                    <div>{email}</div>
                                </ResourceList.Item>
                            );
                        }}
                    />
                </Card>
            </AppProvider>
        );
    }
}
