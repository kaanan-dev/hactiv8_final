import react from "react";
import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default function HeaderComponent() {
    return (
        <>
            <Layout className="layout" style={{paddingTop:30}}>
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" title="Product Name"  > 
                        <Menu.Item key="1">Judul Product</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        </>
    );
}