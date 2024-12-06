
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';
import Btn from './component/Btn';
import Profile from './component/Profile';


function App() {
 
 
  return (
    <div className ='container'>
      <h1>basic App</h1>
      <div className='row'>
      <Profile name='mohammad' location='mumbra'/>
      {/* <Profile name='mohammad' location='mumbra'/>
      <Profile name='mohammad' location='mumbra'/>
      <Profile name='mohammad' location='mumbra'/> */}
      </div>
      
      {/* <Btn name='read more'/> */}

    </div>
      );
}

export default App;

