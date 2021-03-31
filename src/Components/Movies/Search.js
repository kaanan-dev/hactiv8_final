import { Input, Row, Col, Switch, Button } from 'antd';
import { LoginOutlined, WindowsOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { MoviesAction } from "../../Redux/Movies/action";
import { SearchAction } from "../../Redux/Search/action";
import { ErrorAction } from '../../Utils/Error';
import { ModeAction } from '../../Redux/Mode/action';
import { useEffect } from 'react';
import { useDebounce } from 'use-lodash-debounce'
const { Search } = Input;

const SearchComponent = ({ state, mode,dispatch }) => {
    const debouncedValue = useDebounce(state, 800)
    
    useEffect(() => {
        if(debouncedValue.length < 3){
            ErrorAction.setError("Required 3 character at least")
        }
    }, [debouncedValue])

    const switchChanged = () => {
        let e = !mode.mode;
        dispatch(ModeAction.setMode(e))
    }
    const searchMovies = (e) => {
        dispatch(MoviesAction.getMovies(state));
    }
    const setQuery = (e) => {
        let input = e.nativeEvent.srcElement.value;
        dispatch(SearchAction.setQuery(input));
    }
    const isDisabled = () => state.length < 3

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
                        enterButton={<Button disabled={isDisabled()} type={'ghost'} style={{padding:4, width:'5vw'}} >Search</Button>}
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