function Produto({ nome = "Não informado", preco = 0 }) {
    return (
        <div>
            <h2>Produto: {nome}</h2>
            <p>Preço: R$ {preco}</p>
        </div>
    );
}

export default Produto;