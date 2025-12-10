import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import './App.css';

const BlogPosts = {
  '1': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  '2': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
  }
};

// ---------------------
// App Component
// ---------------------
function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>Home</Link>
        <Link to="/about" style={{ padding: 5 }}>About</Link>
        <Link to="/posts" style={{ padding: 5 }}>Posts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Parent route for posts */}
        <Route path="/posts" element={<Posts />}>
          {/* Default list of posts */}
          <Route path="/posts" element={<PostLists />} />
          {/* Dynamic post route */}
          <Route path=":slug" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}

// ---------------------
// Home Component
// ---------------------
function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

// ---------------------
// About Component
// ---------------------
function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

// ---------------------
// Posts Wrapper
// ---------------------
function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}

// ---------------------
// List of Posts
// ---------------------
function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}


// Single Post View// 
function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];


  const { title, description } = post;

  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;
