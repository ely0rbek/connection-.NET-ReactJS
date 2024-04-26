import {Routes,Route} from 'react-router-dom'
import Main from './components/main';
import AddProduct from './components/addProduct';
import Navbar from './components/navbar';
import EditProduct from './components/editProduct';
import Login from './components/login';
import Register from './components/register';
import Admin from './components/admin';
import Student from './components/student';
// import FileInputExample from './components/ehhe';
import Error from './layouts/error'
import First from './components/first';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Main />} /> */}
        <Route path='/admin' element={<Admin />}>
          {/* <Route element={<Main />} path='/' />
          <Route element={<Error />} path='/error' /> */}
        </Route>
        <Route path='/student' element={<Student />} />
        <Route path='/first' element={<First />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/editProduct' element={<EditProduct />} />
        <Route  path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        {/* <Route path='/' element={<FileInputExample />}/> */}
      </Routes>
    </div>
  );
}

export default App;
