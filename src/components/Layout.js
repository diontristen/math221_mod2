import React, { useState, useEffect } from 'react'
import { Layout, Menu, Typography } from 'antd';
import { useHistory } from "react-router-dom";
const { Text } = Typography

const { Content, Footer, Sider } = Layout;




export default function LayoutComponent({ children }) {
    let history = useHistory()
    const [collapsed, setCollapsed] = useState(true)
    const [key, setKey] = useState()
    useEffect(() => {
        let path = window.location.pathname
        path = path.replace('/', '')
        setKey(path)
    }, [])


    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }


    const goToPage = (key) => {
        history.push(`/${key}`)
    }



    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={toggleSidebar}>
                <div className="logo" style={{
                    padding: 15
                }}>
                    <img
                        style={{
                            width: "100%", height: "100%"
                        }}
                        alt="Logo"
                        className="logo"
                        src="assets/mp_icon.png" />
                </div>
                <Menu theme="dark" selectedKeys={[key]} mode="inline">
                    <Menu.Item key=""
                        onClick={() => goToPage('')}
                        icon={<Text >H</Text>}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="simpsons_rule"
                        onClick={() => goToPage('simpsons_rule')}
                        icon={<Text >SR</Text>}>
                        Simpson's Rule
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => goToPage('numerical_differentiation')}
                        key="numerical_differentiation" icon={<Text >ND</Text>}>
                        Numerical Differentiation
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Machine Problem ©2021  by Aguilar & Agcaoili</Footer>
            </Layout>
        </Layout>
    )
}