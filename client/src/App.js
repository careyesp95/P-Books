import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.module.css';
import Home from './page/Home/Home';
import LibroDetail from './page/LibroDetail/LibroDetail';
import LibroCreate from './page/LibroCreate/LibroCreate';
import {BrowserRouter, Route } from 'react-router-dom'
import {getLibroAll} from './actions/index';

function App() {
   const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(getLibroAll())
    },[dispatch])

  return (
    <BrowserRouter>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/home/detail/:id'>
        <LibroDetail />
      </Route>
      <Route exact path='/home/create'>
        <LibroCreate />
      </Route>
    </BrowserRouter>
  );
}

export default App;
