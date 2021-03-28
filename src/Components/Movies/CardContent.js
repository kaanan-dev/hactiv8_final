import { useEffect, useState } from "react";
import { Row, Col } from 'antd';
import { StarTwoTone } from '@ant-design/icons';
import defaultImg from "../../Assets/no-image.png";

const MovieCardContentComponent = (props) => {

    let [content, setContent] = useState(props.data);
    const fetchData = (id) => {
        let data = {};

        data = setdummy(content);

        setContent(data)
    }

    const setdummy = (data) => {
        let val = { ...data };
        val["Runtime"] = "102 min";
        val["Genre"] = "Action, Mystery, Thriller";
        val["Director"] = "Yuen Chor";
        val["Writer"] = "Yuen Chor (screenplay), Long Gu (novel)";
        val["Actors"] = "Lung Ti, Yun Ling, Tony Liu, Li Ching";
        val["Plot"] = "Once again we follow the ultimate playboy sword master, Chu Liu Hsiang, and his faithful friend, Yi Tien Hung, on another amazing adventure in Southeastern China. This time, our heroes make their way to a mysterious place called Bat Island, while meeting other travelers going to the exact same place. There are rumors that if you can afford it, then anyone can buy anything that they desire on this island. Once they finally reach Bat Island the craziness truly begins.";
        val["imdbRating"] = 6.6;
        return val;
    }

    const onClick = (entity) => {
        return (events) => {
            console.log(entity);
        }
    }

    const imgError =(e) => {
        e.nativeEvent.target.src = defaultImg;
    }

    useEffect(() => {
        fetchData(props.imdbID);
    }, []);


    return (
        <Col md={{ span: 6 }} onClick={onClick(content)} >
            <Row justify="space-around" align="middle" style={{ height: 300 }}>
                <Col >
                    <img width={200} src={content.Poster} style={{ maxHeight: 300, position: 'relative' }} onError={(e) => {imgError(e)}} />

                </Col>
            </Row>
            <Row justify="end" align="middle" style={{ height: 20, paddingRight: '5vw' }}>
                <StarTwoTone twoToneColor='black' />
                <h3>{(content.imdbRating / 2).toFixed(1)}</h3>
            </Row>
            <Row justify="space-around" align="middle">
                <h4>{content.Title}</h4>

            </Row>
            <Row justify="space-around" align="middle">

            </Row>

        </Col>
    )
}


export default MovieCardContentComponent;