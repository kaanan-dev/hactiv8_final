import { useEffect, useState } from "react";
import { Row, Col, Typography, Rate, Button } from 'antd';
import { EditFilled, NotificationFilled } from '@ant-design/icons';
import defaultImg from "../../Assets/no-image.png";
const { Title, Paragraph, Link } = Typography;
    
const MovieCarouselContentComponent = (props) => {

    let [content, setContent] = useState(props.data);

    useEffect(() => {
        fetchData(props.imdbID);
    }, []);
    const fetchData = (id) => {
        let data = {};
        data = setdummy(content);
        setContent(data)
    }
    const imgError =(e) => {
        e.nativeEvent.target.src = defaultImg;
    }


    const setdummy = (data) => {
        let val = { ...data };
        val["Runtime"] = "102 min";
        val["Genre"] = "Action, Mystery, Thriller";
        val["Director"] = "Yuen Chor";
        val["Writer"] = "Yuen Chor (screenplay), Long Gu (novel)";
        val["Actors"] = "Lung Ti, Yun Ling, Tony Liu, Li Ching";
        val["Plot"] = "Once again we follow the ultimate playboy sword master, Chu Liu Hsiang, and his faithful friend, Yi Tien Hung, on another amazing adventure in Southeastern China. This time, our heroes make their way to a mysterious place called Bat Island, while meeting other travelers going to the exact same place. There are rumors that if you can afford it, then anyone can buy anything that they desire on this island. Once they finally reach Bat Island the craziness truly begins.";
        val["imdbRating"] = 6.6/2;
        return val;
    }

    return (
        <>
            <Row style={{ height: '80vh' }} >
                <Col md={{ span: 4, offset: 3 }}>
                    <img src={content.Poster} style={{ position: 'relative', top: '10vh', maxWidth: '20vw' }} onError={(e) => {imgError(e)}}  ></img>
                </Col>
                <Col span={17} justify="start" style={{ textAlign: 'start', paddingLeft: 70 }}>
                    <Title level={2} type={'secondary'} style={{ marginBottom: 0, marginTop: '10vh' }}>{content.Year}</Title>
                    <Rate disabled value={content.imdbRating} allowHalf style={{ color: '#001529' }} ></Rate>
                    <Title style={{ marginTop: 0 }} strong>{content.Title}</Title>
                    {
                        content.Genre?.length &&
                        content.Genre.split(',').map((v, i) => {
                            return (
                                <Button key={i} type="dashed" shape="round" style={{ marginRight: 10 }}>
                                    {v}
                                </Button>
                            )
                        })
                    }
                    <Row style={{ paddingTop: 100, cursor: 'pointer' }}>
                        <Paragraph >
                            "{content.Plot}"
                                            </Paragraph>
                    </Row>
                    <Row justify="start" align="middle" >
                        <EditFilled style={{ paddingRight: 10 }} />
                        {
                            content.Writer?.length &&
                            content.Writer.split(',').map((v, i) => {
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
                            content.Director?.length &&
                            content.Director.split(',').map((v, i) => {
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