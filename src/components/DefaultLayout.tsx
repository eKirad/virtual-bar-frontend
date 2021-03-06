// React imports
import React, { useState, useEffect } from 'react';

// Component imports
import UserMenu from './UserMenu';

// Antd imports
import { Menu, Row, Col, Layout } from 'antd';


interface IProps { }

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout; 



const DefaultLayout: React.FC<IProps> = (props) => {

    
    return(
        <Layout style={{ minHeight: "100vh" }}>
            <Header style={{color: 'white', backgroundColor: '#17D7E7'}}>
                <Row>
                    <Col span={24}>
                        <div style={{float: 'right', }}>
                            <UserMenu/>
                        </div>
                    </Col>
                </Row>
            </Header>
            <Layout style={{backgroundColor: `white`}}>
                <Sider theme="light">
                    <Menu
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        
                        <Menu.Item key="1">
                            <span>Home</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <span>Rooms</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ backgroundColor: 'white', margin: "0 100px" }}>
                    <p>Hi from content</p>
                    {/* <Switch>
                        <Route exact={true} path='/'>
                            <Overview/>
                        </Route>
                        <Route exact={true} path='/resume'>
                            <Resume/>
                        </Route>
                    </Switch> */}
                </Content>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
