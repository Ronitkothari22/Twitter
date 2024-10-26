
// import './App.css';
// import Home from './components/Home.js'
// import Body from './components/Body.js'

// function App() {
//   return (
//     <div>
//       <Body/>


//     </div>
//   );
// }

// export default App;

import './App.css';
import Body from './components/Body';
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className="App">
      <Body/>
      <Toaster/>
    </div>
  );
}

export default App;
