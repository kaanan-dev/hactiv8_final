import { Row, Col } from 'antd';
import { StarTwoTone } from '@ant-design/icons';
import defaultImg from "../../Assets/no-image.png";
import { ModeAction } from '../../Redux/Mode/action';
import { useHistory } from 'react-router-dom';


const MovieCardContentComponent = (props) => {
    let history = useHistory();

    const onClick = (entity) => {
        return (events) => {
            console.log(entity);
            let id = entity.data.Index % 10;
            props.dispatch(ModeAction.setMode(false, id));
            history.push('/carousel');
        }
    }

    const imgError =(e) => {
        e.nativeEvent.target.src = defaultImg;
    }

    return (
        <Col md={{ span: 6 }} onClick={onClick(props)} >
            <Row justify="space-around" align="middle" style={{ height: 300 }}>
                <Col >
                    <img width={200} src={props.data.Poster} style={{ maxHeight: 300, position: 'relative' }} onError={(e) => {imgError(e)}} />

                </Col>
            </Row>
            <Row justify="end" align="middle" style={{ height: 20, paddingRight: '5vw' }}>
                <StarTwoTone twoToneColor='black' />
                <h3>{(props.data.imdbRating / 2).toFixed(1)}</h3>
            </Row>
            <Row justify="space-around" align="middle">
                <h4>{props.data.Title}</h4>

            </Row>
            <Row justify="space-around" align="middle">

            </Row>

        </Col>
    )
}


export default MovieCardContentComponent;