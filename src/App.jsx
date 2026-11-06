function Saudacao({nome}) {
  return <h2>Olá, {nome}! Seja bem-vindo ao meu mundo Dev!</h2>;
}

function App() {
  const pessoa = "Maria"
  return (
    <div>
      <h1>Meu primeiro projeto React</h1>
      <p>Estou aprendendo React!</p>
      <Saudacao nome="Bárbara" />
      <Saudacao nome="Ana" />
      <Saudacao nome={pessoa} />
    </div>
  );
}

export default App;