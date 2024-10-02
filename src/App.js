
import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
     <h1 className='Title'>Температурный конвертер</h1>
     <TemperatureConverter />
     <h1 className='Title'>Список дел</h1>
     <TodoList />
    </div>
  );
}

export default App;
