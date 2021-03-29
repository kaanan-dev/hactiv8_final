import { Input, Select, Row, Col, Switch, Button } from 'antd';
import { LoginOutlined, WindowsOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { MoviesAction } from "../../Redux/Movies/action";
import { SearchAction } from "../../Redux/Search/action";
import { useEffect } from 'react';
import { ErrorAction } from '../../Utils/Error';
import { ModeAction } from '../../Redux/Mode/action';
const { Option } = Select;
const { Search } = Input;

const SearchComponent = ({ state, mode,dispatch }) => {
    let history = useHistory();
    const switchChanged = () => {
        debugger;
        let e = !mode.mode;
        dispatch(ModeAction.setMode(e))
        if (e) {
            history.push('/cards');
            return;
        }
        history.push('/carousel');

    }


    const searchMovies = (e) => {
        dispatch(MoviesAction.getMovies(state));
    }
    const setQuery = (e) => {
        let input = e.nativeEvent.srcElement.value;
        if(input.length < 3){
            ErrorAction.setError("Required 3 character at least")
        }
        dispatch(SearchAction.setQuery(input));
    }

    return (
        <Row style={{ padding: 8 }}>
            <Col md={{ span: 1, offset: 1 }} style={{ paddingTop: 5 }}>
                <Switch
                    size={'default'}
                    checkedChildren={<WindowsOutlined />}
                    unCheckedChildren={<LoginOutlined />}
                    defaultChecked={false}
                    onClick={switchChanged}
                    checked={mode.mode}
                    style={{ minWidth: 60, backgroundColor: '#001529' }}

                />
            </Col>
            <Col md={{ span: 6, offset: 15 }}>
                <Input.Group compact>
                    <Select defaultValue="Movie" style={{ width: '30%' }} bordered={false} >
                        <Option value="Movie">Movie</Option>
                        <Option value="Series">Series</Option>
                    </Select>
                    <Search
                        style={{ width: '70%' }}
                        placeholder="Search"
                        value={state}
                        enterButton="Search"
                        onChange={setQuery}
                        onSearch={searchMovies}
                    />
                </Input.Group>
            </Col>
            <Col md={{ span: 1 }}></Col>
        </Row>
    )
}


export default connect(
    (combinedReducerState) => ({ state: combinedReducerState.search, mode: combinedReducerState.mode })
)(SearchComponent);