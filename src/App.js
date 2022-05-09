  
import React from 'react';
import Allproduct from './components/Allproduct';
 
 
import Men from './components/men';
import Beauty from './components/beauty';
import Footerware from './components/Footerware';
import Home from './components/Homeproduct';
import Jewellary from './components/Jewelary';
import Saree from './components/Saree';
import Westenware from './components/Westen';
 
 
import Kids from './components/KIds';
import Electronics from './components/electronics';

function App() {                                 
   

  return (
     <div id="App">
       <Home/>
       <div>
         <Home/>
       </div>
       <div>
         <Kids/>
       </div>
      <div>
   <Electronics/>
      </div>
      <Westenware/>
      <div>
        <Saree/>
      </div>
        <div>
          <Men/>
        </div>
        <div>
          <Footerware/>
        </div>
        <div>
          <Allproduct/>
        </div>
        <div>
          <Beauty/>
        </div>
        <Jewellary/>

     </div>

     
 

)
 
 
}

export default App;
