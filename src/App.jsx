import Saudacao from './components/Saudacao';
import Produto from './components/Produto';

function App() {
  const pessoa = "Maria"
  return (
    <div>
      <h1>Meu primeiro projeto React</h1>
      <p>Estou aprendendo React!</p>
      <Saudacao nome="Bárbara" idade={31} />
      <Produto nome="Notebook" preco={3500} />
      <Produto nome="Mouse" preco={80} />
      <Produto nome="Teclado" preco={150} />
    </div>
  );
}

export default App;