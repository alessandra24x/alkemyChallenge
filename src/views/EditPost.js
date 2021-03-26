import React, {useState, useEffect} from 'react';
import FormTemplate from '../components/FormTemplate';
import { useParams } from 'react-router';

const EditPost = (props) => {
    console.log(props)
    let {id} = useParams();
    const post = props.posts.filter(post => post.id === Number.parseInt(id))[0];
    const [status, setStatus] = useState("init");
    
    useEffect(() => post ? setStatus("resolved") : setStatus("rejected"), [post])

    if (status === "init") return <small>Cargando...</small>
    if (status === "rejected") return <small>Hubo un problema con la carga de datos. Intente nuevamente</small>
   
    return ( <FormTemplate handleClick={(post) => props.handleClick(id, post)} post={post}/> )
}

export default EditPost
