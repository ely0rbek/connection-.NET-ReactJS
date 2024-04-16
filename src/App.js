import {Routes,Route} from 'react-router-dom'
import Main from './components/main';
import AddProduct from './components/addProduct';
import Navbar from './components/navbar';
import EditProduct from './components/editProduct';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/editProduct' element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
