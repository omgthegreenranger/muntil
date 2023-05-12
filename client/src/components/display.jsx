import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

export function Display() {
    const [users, setUsers] = useState();

    const fetchData = axios.get('/users',
                {
                    method: 'GET',
                    headers: {
                        Accept:"application/json",
                        'Content-Type': 'application/JSON'
                    }
                }
            ).then(({data}) => {
                let users = JSON.stringify(data)
                return(
                users.map((user) => {
                return (
                <ul>
                    <li>{user.first_name} {user.last_name}</li>
                </ul>
                )})
            )});
        
    console.log(fetchData);
    return ( 
        <div><h3>Hello</h3>
{fetchData}
            </div>
            )
}