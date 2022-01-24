import { useState, useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss'

import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import Nav from './Components/navbar';
import Home from './Components/home'
import Projects from './Components/projects'
import Article from './Components/article'
import ToDoList from './To-Do-List/toDoList'
import Calculator from './Calculator/Calculator'

function App() {
  const blogPosts = useBlogs(null); 
  const [Post, setPost] = useState('');

  const getPost = (post) => {
    console.log(post);
    setPost(post);
  }

  return (
    <Router>
        <Nav/>
          <Routes>
            <Route exact path='/learningReact' element={<Home blogPosts={blogPosts} getPost={getPost}/>}></Route>

            <Route exact path={'/article-' + Post.slug} element={<Article post={Post}/>}>
            </Route>

            <Route exact path='/projects' element={<Projects/>}>
            </Route>
          
            <Route exact path='/projects-toDoList' element={<ToDoList/>}>
            </Route>

            <Route exact path='/projects-calculator' element={<Calculator/>}>
            </Route>

          </Routes>
      </Router>
  );
}
  

export default App;


function useBlogs() {

  const BLOG_QUERY = `
  query MyQuery {
    learningReacts {
      dateCreated
      excerpt
      id
      slug
      title
      thumbnail {
        url
      }
      mainContent {
        html
        markdown
        text
      }
    }
  }
  `

  const [blogs, setBlogs] = useState({}); 

  useEffect(() => {

    fetch("https://api-eu-west-2.graphcms.com/v2/ckyrixynx1tkc01yz38g97fiz/master",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query: BLOG_QUERY })
    }).then(response => response.json())
    .then(data => {
      setBlogs(data.data.learningReacts);
    })
  }, []);

  return blogs;

}

// setBlogs(data.data.postsConnection.edges)