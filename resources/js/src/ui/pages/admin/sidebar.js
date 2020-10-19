import React from "react";
import {Nav, Image} from "react-bootstrap";
import { withRouter } from "react-router";
import LogoutButton from "../../components/logout";
import './style/dashboard.css';

const Side = props => {
    const logo = "https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ";
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar"
            activeKey="/import"
            >
            <div className="text-center">
            <Image
             width={100}
             src={logo} roundedCircle />
            </div>

            <Nav.Item>
                <Nav.Link href="/administration/import">Import Data</Nav.Link>
            </Nav.Item>
            <LogoutButton/>

            </Nav>

        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar
