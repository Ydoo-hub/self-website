
import { 
    BrowserRouter as Router, 
    Route,
    Routes
  } from 'react-router-dom'
import HomePage from '../container/home';
import Certificate from '../container/certificate';
import Article from '../container/article';
import About from '../container/about'
import Detail from '../container/detail';
import './style.css'

const App = () => {
    return <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/certificate" Component={Certificate} />
        <Route path="/article" Component={Article} />
        <Route path="/about" Component={About} />
        <Route path='/detail' Component={Detail} />
      </Routes>
    </Router>
  }
   
  export default App;
