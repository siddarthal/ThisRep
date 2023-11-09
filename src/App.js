import Statesprops from './components/Statesprops';
import './App.css';
import Input from './components/Input';
import Cone from './components/Cone';
import ReactPlayer from "react-player/youtube";
import { Route, Routes ,Link} from 'react-router-dom';
import Calculator from './components/Calculator';
// const MyVideo = () => {
//   return (
//     <ReactPlayer url='https://www.youtube.com/watch?v=WvcHQtyPcTs' />
//   );
// };
function App() {
  return (
    <div className="App">
      {/* <Cone />
      <Input />
      <Statesprops /> */}
      {/* <Link to='/'>Input</Link>
      <Link to='/sid'>States</Link>
      <Routes>
        <Route path='/' element={<Input />} />
        <Route path='/sid' element={<Statesprops />} />
      </Routes> */}
      {/* <MyVideo /> */}

      <Calculator/>
    </div>
  );
  
}

export default App;
