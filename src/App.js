
import {ViewTransition} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router";


// Components
import Scroll from "./components/Scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Landing";
import PostPage from "./pages/PostPage";
import Article from "./pages/Article";

// Style
import './styles/App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Scroll />
        <Navbar />
        <ViewTransition>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/reports" exact element={<PostPage tag="Reports" />}/>
            <Route path="/blogs" exact element={<PostPage tag="Blogs"  />}/>
            <Route path="/sports" exact element={<PostPage tag="Sports"  />}/>
            <Route path="/article" exact element={<Article />}/>
          </Routes>
        </ViewTransition>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
