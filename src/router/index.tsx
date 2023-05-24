
import { 
    BrowserRouter as Router, 
    Route,
    Routes
  } from 'react-router-dom'
import HomePage from '../container/home';
import './style.css'

const App = () => {
    return <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </Router>
  }
   
  export default App;
