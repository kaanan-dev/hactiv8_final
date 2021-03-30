import { Input, Row, Col, Switch } from 'antd';
import { LoginOutlined, WindowsOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { MoviesAction } from "../../Redux/Movies/action";
import { SearchAction } from "../../Redux/Search/action";
import { ErrorAction } from '../../Utils/Error';
import { ModeAction } from '../../Redux/Mode/action';
const { Search } = Input;

const SearchComponent = ({ state, mode,dispatch }) => {
    let history = useHistory();
    const switchChanged = () => {
        let e = !mode.mode;
        dispatch(ModeAction.setMode(e))
        if (e) {
            history.push('/cards');
            return;
        }
        history.push('/carousel');

    }
    const searchMovies = (e) => {
        let input = e;
        if(input.length < 3){
            ErrorAction.setError("Required 3 character at least")
            return;
        }
        dispatch(MoviesAction.getMovies(state));
        dispatch(ModeAction.setMode(true));
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
                    <Search
                        style={{ width: '70%' }}
                        placeholder="Search"
                        value={state}
                        enterButton="Search"
                        onChange={setQuery}
                        onSearch={searchMovies}
                    />
            </Col>
            <Col md={{ span: 1 }}></Col>
        </Row>
    )
}


export default connect(
    (combinedReducerState) => ({ state: combinedReducerState.search, mode: combinedReducerState.mode })
)(SearchComponent);