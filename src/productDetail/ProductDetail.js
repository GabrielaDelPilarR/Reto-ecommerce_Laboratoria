export default function ProductDetail({ products, state, onChangeState }) {
  console.log(products)
  return (
    <>
      {state && (
        products.map((product)=>(
          <>

      <h3>{product.title}</h3>
        <div>
          <img src={ product.images} alt={ product.title }></img>
        </div>
      <p>Precio: $ {product.price}</p>
      <div>
        <h4>Detalles</h4>
        <p>Description: {product.description}</p>
        <p>Puntuación: {product.rating}</p>
        <p>Categoria: {product.category}</p>
      </div>

          </>

        ))
      )}
    </>
  );
}
