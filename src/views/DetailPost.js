import React, {useState, useEffect} from 'react'
import {Card, CardText, CardBody,CardTitle} from 'reactstrap';
import { useParams } from 'react-router';

const DetailPost = (props) => {
    let {id} = useParams();
    const post = props.posts.filter(post => post.id === Number.parseInt(id))[0];
    const [status, setStatus] = useState("init");
    
    useEffect(() => post ? setStatus("resolved") : setStatus("rejected"), [post])
    
    if (status === "init") return <small>Cargando...</small>
    if (status === "rejected") return <small>Hubo un problema con la carga de datos. Intente nuevamente</small>
    const {title, body} = post;

    return (
        <div className="detail">
            <Card>
                <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>{body}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default DetailPost;
