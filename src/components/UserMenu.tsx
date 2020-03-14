// React imports
import React, { useState, useEffect } from 'react';

// Antd imports
import { Menu, Row, Col, Layout, Avatar, Dropdown } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';


interface IProps { }

const userList = ['John', 'Tom', 'Michael', 'Edward'];

const UserMenu: React.FC<IProps> = (props) => {
    const [currentUser, setCurrentUser] = useState(userList[0]);
    const menu = (
        <Menu>
            <Menu.Item>
                <Row>
                    <Col span={20}>
                        Profile
                    </Col>
                    <Col span={4}>
                        <UserOutlined />
                    </Col>
                </Row>
            </Menu.Item>
            <Menu.Item>
                <Row>
                    <Col span={20}>
                        Logout
                    </Col>
                    <Col span={4}>
                        <LogoutOutlined/>
                    </Col>
                </Row>
            </Menu.Item>
        </Menu>
    );

    
    return(
        <div style={{ marginLeft: "auto", paddingRight: 20, display: "flex" }}>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    <Avatar style={{ backgroundColor: `orange`, verticalAlign: 'middle' }} size="large">
                        {currentUser}
                    </Avatar>
                </a>
            </Dropdown>
        </div>
    );
}

export default UserMenu;