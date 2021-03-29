import { useEffect, useState } from "react";
import { Row, Col, Typography, Rate, Button } from 'antd';
import { EditFilled, NotificationFilled } from '@ant-design/icons';
import defaultImg from "../../Assets/no-image.png";
const { Title, Paragraph, Link } = Typography;
    
const MovieCarouselContentComponent = (props) => {
    const onClick = (entity) => {
        return (events) => {
        }
    }

    const imgError =(e) => {
        e.nativeEvent.target.src = defaultImg;
    }

    return (
        <>
            <Row style={{ height: '80vh' }} >
                <Col md={{ span: 4, offset: 3 }}>
                    <img src={props.data.Poster} style={{ position: 'relative', top: '10vh', maxWidth: '20vw' }} onError={(e) => {imgError(e)}}  ></img>
                </Col>
                <Col span={17} justify="start" style={{ textAlign: 'start', paddingLeft: 70 }}>
                    <Title level={2} type={'secondary'} style={{ marginBottom: 0, marginTop: '10vh' }}>{props.data.Year}</Title>
                    <Rate disabled value={props.data.imdbRating} allowHalf style={{ color: '#001529' }} ></Rate>
                    <Title style={{ marginTop: 0 }} strong>{props.data.Title}</Title>
                    {
                        props.data.Genre?.length &&
                        props.data.Genre.split(',').map((v, i) => {
                            return (
                                <Button key={i} type="dashed" shape="round" style={{ marginRight: 10 }}>
                                    {v}
                                </Button>
                            )
                        })
                    }
                    <Row style={{ paddingTop: 100, cursor: 'pointer' }}>
                        <Paragraph >
                            "{props.data.Plot}"
                                            </Paragraph>
                    </Row>
                    <Row justify="start" align="middle" >
                        <EditFilled style={{ paddingRight: 10 }} />
                        {
                            props.data.Writer?.length &&
                            props.data.Writer.split(',').map((v, i) => {
                                return (
                                    <Link type="secondary" key={i} target="_blank" style={{ paddingRight: 5 }}>
                                        {v}
                                    </Link>
                                )
                            })
                        }

                    </Row>
                    <Row justify="start" align="middle" >
                        <NotificationFilled style={{ paddingRight: 10 }} />
                        {
                            props.data.Director?.length &&
                            props.data.Director.split(',').map((v, i) => {
                                return (
                                    <Link type="secondary" key={i} target="_blank" style={{ paddingRight: 5 }}>
                                        {v}
                                    </Link>
                                )
                            })
                        }

                    </Row>


                </Col>


            </Row>
        </>
    )


}


export default MovieCarouselContentComponent;