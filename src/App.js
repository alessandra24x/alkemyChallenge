import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home';
import AddPost from './views/AddPost';
import EditPost from './views/EditPost';
import DetailPost from './views/DetailPost';
import NavBar from './components/NavBar';
import { getPosts, deletePost, updatePost, createPost } from './services/index';

function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("init");

  useEffect(() => {
    getPosts()
      .then(resp => {
        setPosts(resp.data);
        setStatus("resolved");
      })
      .catch(() => {
        console.log("useEffect")
        setStatus("rejected");
    })
  }, [])

  const removePost = async (id) => {
    try {
      const resp = await deletePost(id);
      console.log(resp)
      setPosts(posts.filter(post => post.id !== id));
      alert('Elemento eliminado')
    } catch (error) {
      setStatus("rejected");
    }
  }

  const editPost = async (id, post) => {
    try {
      const resp = await updatePost(id, post);
      const index = posts.findIndex(p => p.id === Number.parseInt(id));
      const newPosts = [...posts];
      newPosts[index] = resp.data;
      setPosts(newPosts);
      alert('Elemento editado')
    } catch (error) {
      setStatus("rejected");
    }
  }

  const addPost = async (post) => {
    try {
      const resp = await createPost(post);
      setPosts([resp.data, ...posts]);
      alert('post created')
    } catch (error) {
      setStatus("rejected");
    }
  }

  if (status === "init") return <small>Cargando...</small>
  if (status === "rejected") return <small>Hubo un problema con la carga de datos. Intente nuevamente</small>

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"> <Home posts={posts} handleClick={removePost} /> </Route>
          <Route path="/add"> <AddPost posts={posts} handleClick={addPost} /> </Route>
          <Route path="/edit/:id"> <EditPost posts={posts} handleClick={editPost} /> </Route>
          <Route path="/:id"> <DetailPost posts={posts} /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
