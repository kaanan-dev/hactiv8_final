import { Input, Select, Row, Col, Switch } from 'antd';
import { LoginOutlined, WindowsOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
const { Option } = Select;

export default function SearchComponent() {
    let history = useHistory();
    const switchChanged = (e) => {
        console.log(history);
        if (e) {
            history.push('/cards');
            return;
        }
        history.push('/carousel');

    }

    return (
        <Row style={{ padding: 8 }}>
            <Col md={{ span: 1, offset: 1 }} style={{ paddingTop: 5 }}>
                <Switch
                    size={'default'}
                    checkedChildren={<WindowsOutlined />}
                    unCheckedChildren={<LoginOutlined />}
                    defaultChecked={false}
                    onChange={switchChanged}
                    style={{ minWidth: 60, backgroundColor: '#001529' }}

                />
            </Col>
            <Col md={{ span: 6, offset: 15 }}>
                <Input.Group compact>
                    <Select defaultValue="Movie" style={{ width: '30%' }} bordered={false}>
                        <Option value="Movie">Movie</Option>
                        <Option value="Series">Series</Option>
                    </Select>
                    <Input
                        style={{ width: '70%', borderRadius: 100 }}
                        placeholder="Search"
                    />
                </Input.Group>
            </Col>
            <Col md={{ span: 1 }}></Col>
        </Row>
    )
}