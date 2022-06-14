import './App.css';
import {Brand,CTA,Navbar} from './components'
import {Header , Footer, Features, Possibility,WhatGPT3,Blog} from './containers'

function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
       <Navbar/>
       <Header/>
     </div>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <CTA/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
