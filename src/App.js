import React from 'react';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
// import TodoInput from './components/TodoInput';
import Navbar from './components/Navbar';
import TenTodos from './components/TenTodos';
// import {BrowserRouter , Route} from 'react-router-dom';

function App() {
  return (
	<>
	<div className="App">
   	<Navbar/>
 	<TodoList/>
     {/* <TenTodos/> */}
   	{/* <Route  exact path='/'  component={TodoList} /> */}
 	<TenTodos/>
 	{/* <TodoInput/> */}
 	{/* <TodoList/> */}
   	{/* <Route path='/add' component={TodoInput} />
   	<Route path='/list' component={TodoList} /> */}
   	</div>
	</>
  
//   <BrowserRouter>
//   <div className="App">
//   	<Navbar/>
// 	<TodoList/>
//     {/* <TenTodos/> */}
//   	<Route  exact path='/'  component={TodoList} />
// 	<TenTodos/>
// 	<TodoInput/>
// 	<TodoList/>
//   	<Route path='/add' component={TodoInput} />
//   	<Route path='/list' component={TodoList} />
//   	</div>
//   	</BrowserRouter>
  	
  	
  );
}

export default App;
