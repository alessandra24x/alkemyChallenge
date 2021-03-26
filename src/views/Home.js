import { Card, CardTitle, CardBody, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Home(props) {
    return (
        <>
            {props.posts.map(post => {
                return (
                    <Card key={post.id} style={{textAlign: "center"}}>
                        <CardBody>
                            <Link to={`/${post.id}`} >
                                <CardTitle tag="h5">{post.title}</CardTitle>
                            </Link>
                            <Link to={`/edit/${post.id}`} className="btn btn-primary ml-2" size="sm">Edit</Link>
                            <Button onClick={() => props.handleClick(post.id)} className="btn btn-danger ml-2">Delete</Button>
                        </CardBody>
                    </Card>
                )
            })}
        </>
    )
}