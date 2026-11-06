function Saudacao({nome}) {
  return <h2>Olá, {nome}!</h2>
}

function App() {
  return (
    <div>
      <h1>Meu primeiro projeto React</h1>
      <p>Estou aprendendo React!</p>
      <Saudacao nome="Bárbara" />
      <Saudacao nome="Ana" />
    </div>
  );
}

export default App;