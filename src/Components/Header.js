import { Layout, Menu } from 'antd';
import logo from "../Assets/logo.png";
const { Header } = Layout;

export default function HeaderComponent() {
    return (
        <>
            <Layout className="layout" style={{paddingTop:30}}>
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" title="Product Name"  > 
                        <Menu.Item key="1" icon={
                            <img alt={'logo'} src={logo} style={{maxHeight:30}}/>
                        }
                        >Movie Pandemi</Menu.Item>
                    </Menu>
                    
                </Header>
            </Layout>
        </>
    );
}