import { Carousel, Row, Col } from 'antd';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { MoviesAction } from '../../Redux/Movies/action';
import Content from "./CarouselContent";


const MoviesCarousel = ({ state, mode, dispatch }) => {
    useEffect(() => {
        let i = 0;
        while (state?.item?.length > i) {
            if (!state.item[i].Plot)
                dispatch(MoviesAction.getDetail(state.item[i].imdbID));
            i++;
        }
    }, [state, dispatch])
    const paging = (val) => {
        let start = (state.page - 1) * state.size;
        let end = state.page * state.size;
        return val.Index >= start && val.Index < end;
    }

    const forceSetSlide = () => {
        if(!mode.id)
            return 0
        
        return mode.id;
    }
    return (
        <Row>
            <Col md={{ span: 22, offset: 1 }}>
                <Carousel dotPosition={'bottom'} draggable initialSlide={forceSetSlide()}  >
                    {state.item &&
                        state.item
                            .filter(paging)
                            .map((val, index) => {
                                return (
                                    <Content key={index} data={val} />
                                )
                            })
                    }
                </Carousel>
            </Col>
            <Col md={{ span: 1 }}></Col>
        </Row>


    )
}


export default connect(
    (combinedReducerState) => ({ state: combinedReducerState.movies, mode: combinedReducerState.mode })
)(MoviesCarousel);