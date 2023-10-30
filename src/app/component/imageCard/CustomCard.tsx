import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
interface Params {
    img: string,
    title: string,
    body: string
    date: string
}
export default function CustomCard(param: Params) {
    return (
        <Card sx={{ maxWidth: 265 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300px"
                    image={param.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Row>

                        <Col xs="7">
                            <Typography variant="body2" component="div" style={{ color: "#3C8143" }}>
                                {param.title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {param.body}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {param.date}
                            </Typography>
                        </Col>
                        <Col>
                            <img
                                width={50}
                                srcSet={`thai-flag.png`}
                                src={`thai-flag.png`}
                                alt={"item.title"}
                                loading="lazy"
                            />
                            <Typography variant="body2" color="text.secondary">
                                สวนเทพนา
                            </Typography>
                        </Col>
                    </Row>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}