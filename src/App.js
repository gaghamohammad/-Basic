
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
    img:'https://avatars.githubusercontent.com/u/182938196?v=4',
    link:'https://github.com/shk-Sam',
    btn:'open profile',
    },
    {
    name:'prince',
    desc:' I am studying in BSCIT..',
    img:'https://avatars.githubusercontent.com/u/111479652?v=4',
    link:'https://github.com/pri810',
    btn:'open profile',
    },
    {
    name:'moin',
    desc:' I am studying in 7th',
    img:'https://avatars.githubusercontent.com/u/186063909?v=4',
    link:'https://github.com/moinuddin-4678',
    btn:'open profile',
    },
    
    {
    name:'nawaf',
    desc:' I am studying in 11TH',
    img:'https://avatars.githubusercontent.com/u/182943003?v=4',
    link:'https://github.com/Sknawaf05',
    btn:'open profile',
    },
    {
    name:'tehseen',
    desc:' I am post Graduate',
    img:'https://avatars.githubusercontent.com/u/182941013?v=4',
    link:'https://github.com/jiyashah26',
    btn:'open profile',
    },
    {
    name:'rumana',
    desc:' I am studying in 12th',
    img:'https://avatars.githubusercontent.com/u/185526264?v=4',
    link:'https://github.com/rumanamotiwala',
    btn:'open profile',
    },
    {
    name:'basheer',
    desc:' I am studying in BCA..',
    img:'https://avatars.githubusercontent.com/u/182937907?v=4',
    link:'https://github.com/Basheer107',
    btn:'open profile',
    },
    {
    name:'vocab',
    desc:' i am teaching react',
    img:'https://avatars.githubusercontent.com/u/185526098?v=4',
    link:'https://github.com/Vocabstudents',
    btn:'open profile',
    },
    
    
    
  ]
 
  return (
    <div className ='container'>
      <h1>basic App</h1>
      <div className='row'>
      {/* <Profile />   */}
     {
      Profiles.map ((profile)=>{
        return <Profile profile={profile}/>
      })
     }
      
      </div>
      
      
    </div>
      );
}

export default App;

