import { Row, Pagination } from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MoviesAction } from '../../Redux/Movies/action';

import Content from './CardContent';


const MoviesCards = ({ state, search, loading, dispatch }) => {
    let history = useHistory();

    const changePage = (page, pageSize) => {
        dispatch(MoviesAction.setPageIndex(page));
       
    }

    const paging = (val) => {
        let start = (state.page - 1) * state.size;
        let end = state.page * state.size;
        return val.Index >= start && val.Index < end;
    }

    return (
        <>
            <Row gutter={[0, 40]} style={{ paddingLeft: 150, paddingRight: 150, paddingTop: 30 }}>
                {
                    state.item &&
                    state.item
                        .filter(paging)
                        .map((val, index) => {
                            return (
                                <Content key={index} data={val} dispatch={dispatch} />
                            )
                        })
                }
            </Row>
            <Pagination
                total={state.totalData}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                defaultCurrent={1}
                onChange={changePage}
                style={{ paddingBottom: 100, paddingTop: 30 }}
                showSizeChanger={false}
                disabled={loading}
            />

        </>
    )
}

export default connect(
    (combinedReducerState) => ({ state: combinedReducerState.movies, search: combinedReducerState.search, loading: combinedReducerState.loading })
)(MoviesCards);