
import { 
    BrowserRouter as Router, 
    Route,
    Routes
  } from 'react-router-dom'
import HomePage from '../container/home';
import Certificate from '../container/certificate';
import Article from '../container/article';
import './style.css'

const App = () => {
    return <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/certificate" Component={Certificate} />
        <Route path="/article" Component={Article} />
      </Routes>
    </Router>
  }
   
  export default App;
