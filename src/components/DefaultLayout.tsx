// React imports
import React, { useState, useEffect } from 'react';

// Antd imports
import { Menu, Row, Col, Layout, Avatar } from 'antd';


interface IProps { }

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout; 

const userList = ['John', 'Tom', 'Michael', 'Edward'];

const DefaultLayout: React.FC<IProps> = (props) => {
    const [currentUser, setCurrentUser] = useState(userList[0]);
    
    return(
        <Layout style={{ minHeight: "100vh" }}>
            <Header style={{color: 'white', backgroundColor: '#17D7E7'}}>
                <Row>
                    <Col span={24}>
                        <div style={{float: 'right', }}>
                            <Avatar style={{ backgroundColor: `orange`, verticalAlign: 'middle' }} size="large">
                                {currentUser}
                            </Avatar>
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
