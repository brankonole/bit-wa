import React, { Component } from 'react';
import User from '../entities/User.js';

class UserService extends Component {
    constructor(props) {
        super(props)
    }

    fetchUsers() {
        return fetch('https://randomuser.me/api/?results=15')
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    const usersList = result.results
                    return usersList.map((user, i) => {
                        return new User(user)
                    })
                })
    }
}

export const userService = new UserService