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
    }, [])

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
                            .filter(v => (v.Index >= ((state.page - 1) * state.size) && v.Index < ((state.page) * state.size)))
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