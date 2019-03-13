import React, { Component } from 'react';
import axios from 'axios';
import {AppProvider,TextStyle, Avatar, Card, ResourceList} from '@shopify/polaris';

export default class UserList extends React.Component {
    constructor()
    {
        super();
        this.state={
            users:[],
            filtered:[],
            loading:true,
            searchValue:''
        };
        this.handleSearchChange = (searchValue) => {
            this.setState({searchValue});
            this.filter();
          };
    }
    filter () {
        this.state.filtered=this.state.users.filter(
            (user)=>{
                return user.email.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !==-1 ||
                    user.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !==-1 
            }
        );
      };
    componentDidMount()
        {
            axios.get('/user')
            .then(response=>{
                this.state.loading=false
                this.setState({users:response.data})
            });
        }
    render() {
            this.filter()

            const filterControl = (
            <ResourceList.FilterControl
              searchValue={this.state.searchValue}
              onSearchChange={this.handleSearchChange}
            />
          );
      
        return (
            <AppProvider>
                <Card>
                    <ResourceList
                        filterControl={filterControl}
                        loading={this.state.loading}
                        items={this.state.filtered}
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
