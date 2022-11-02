import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

//Importamos Componentes
import MyButton from './components/MyButton/MyButton';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return (
    <>
    <div className="App">

      <header className="App-header">

        <NavBar/>

        <ItemListContainer greeting="PRODUCTOS MAGIC THE GATHERING"/>

      </header>
    </div>
    </>
  );
}

export default App;
