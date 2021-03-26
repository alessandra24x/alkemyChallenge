import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Link, useLocation} from 'react-router-dom';

const FormTemplate = (props) => {
    const {title: titlePost, body: contentPost, id, userId} = props?.post ?? {};
    const [title, setTitle] = useState(titlePost ?? '') ;
    const [content, setContent] = useState(contentPost ?? '');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if(title.length > 0 && content.length > 0) {
            setIsSubmitDisabled(false);
        } else setIsSubmitDisabled(true);
    }, [title, content])

    const handleButtonValue = location.pathname === "/add" ? "Add Post" : "Edit Post";
         
    return (
        <Form className="form">
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter a title" id="title"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="content">Content</Label>
                    <Input type="textarea" value={content} onChange={(e) => setContent(e.target.value)} name="text" id="content" />
                </FormGroup>
                <Button color="primary" disabled={isSubmitDisabled} onClick={() => props.handleClick({id, title, body: content, userId})} >{handleButtonValue}</Button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default FormTemplate
