
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';
import Btn from './component/Btn';
import Profile from './component/Profile';


function App() {
  const Profiles =[
    {
    name:'mohammad',
    desc:' I am studying in BCA..',
    img:'https://avatars.githubusercontent.com/u/185525438?v=4',
    link:'https://github.com/gaghamohammad',
    btn:'open profile',
    },
    {
    name:'saad',
    desc:' I am studying in BCA..',
    img:'https://avatars.githubusercontent.com/u/185525438?v=4',
    link:'https://github.com/gaghamohammad',
    btn:'open profile',
    },
    {
    name:'prince',
    desc:' I am studying in BCA..',
    img:'https://avatars.githubusercontent.com/u/185525438?v=4',
    link:'https://github.com/gaghamohammad',
    btn:'open profile',
    },
    
    
    
  ]
 
  return (
    <div className ='container'>
      <h1>basic App</h1>
      <div className='row'>
      {/* <Profile />   */}

      
      </div>
      
      
    </div>
      );
}

export default App;

