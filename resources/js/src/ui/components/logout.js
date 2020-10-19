import React, {useContext} from 'react';
import {authContext} from '../../context/auth_context';
import {Nav}  from 'react-bootstrap';

function LogoutButton(){
    const { setAuthData } = useContext(authContext);
    const onLogOut = () => {
      setAuthData(null);
    } //clearing the context
return (
    <Nav.Item>
        <Nav.Link onClick={onLogOut} >Logout</Nav.Link>
    </Nav.Item>
);
}

export default LogoutButton;
