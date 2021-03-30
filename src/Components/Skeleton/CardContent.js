import { Skeleton, Row, Col } from "antd"

const CardContentSekeleton = () => {

    return (
        <Col md={{ span: 6 }} style={{paddingRight:10, paddingLeft:10}} >
            <Row justify="space-around" align="middle" style={{ height: 240 }}>
                <Col >
                    <Skeleton.Image style={{ maxHeight: 200, position: 'relative' }} />
                </Col>
            </Row>
            <Row justify="space-around" align="middle">
                <Skeleton active paragraph={{ rows: 2 }}/>
            </Row>
            <Row justify="space-around" align="middle">

            </Row>

        </Col>
    )
}


export default CardContentSekeleton