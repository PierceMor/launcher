import React, { Component  } from "react";
import API from '../utils/API';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class allUsers extends Component {

    state = {
        users: []
    };

    componentDidMount(){
        this.loadUsers();
    };

    loadUsers = () => {
        API.getUser()
        .then(res => this.setState({ users: res.data }))
        .catch(err=> console.log(err, 'error at allUsers Page, fetching data' ));
    };

    render(){
        return(
            <div>
                    {this.state.users.length ? (
                        <List>
                            {this.state.users.map(user => (
                                <ListItem key={user._id}>
                                    <h1>{user.userName}</h1>
                                    <br /> 
                                    <p>{user.description}</p>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Users yet Added</h3>
                    )}
            </div>
        )
    }
}

export default allUsers;