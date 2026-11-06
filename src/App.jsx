function Saudacao({nome, idade}) {
  return <h2>Olá, meu nome é {nome}! Tenho {idade} anos!
          Seja bem-vindo ao meu mundo Dev!
          </h2>;
}

function App() {
  const pessoa = "Maria"
  return (
    <div>
      <h1>Meu primeiro projeto React</h1>
      <p>Estou aprendendo React!</p>
      <Saudacao nome="Bárbara" idade={31} />
    </div>
  );
}

export default App;