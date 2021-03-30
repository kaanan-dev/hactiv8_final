import { Row, Pagination } from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MoviesAction } from '../../Redux/Movies/action';
import SkeletonContent from "../Skeleton/CardContent";

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

    const createLoadingState = (number) => {
        let loadingArray = [];
        while (number > 0) {
            loadingArray.push({});
            number--;
        }

        return (
            loadingArray.map((v, i) => {
                return (
                    <SkeletonContent key={i} />
                )
            })
        )
    }

    return (
        <>
            <Row gutter={[0, 40]} style={{ paddingLeft: 150, paddingRight: 150, paddingTop: 30, maxHeight: 1300, minHeight:1300 }} justify="start" align="top" >
                {
                    !loading ?
                        state.item
                            .filter(paging)
                            .map((val, index) => {
                                return (
                                    <Content key={index} data={val} dispatch={dispatch} />
                                )
                            })
                        :
                        createLoadingState(10)
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