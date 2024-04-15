import gif from '../../images/HufflepuffGif.gif';
function Hufflepuff() {
  return (
    <article className="house__art">
      <img src={gif} alt="" className="house__art--gif" />
      <div className="house__art--text">
        <h4>Bienvenido/a a Hufflepuff</h4>
        <p>
          Los miembros de Hufflepuff valoran la igualdad, la amistad y las
          relaciones duraderas. Son personas leales que están dispuestas a
          ayudar a los demás sin esperar nada a cambio. Tienen un fuerte sentido
          de la justicia y valoran la honestidad y la modestia. Los Hufflepuff
          son trabajadores incansables, dispuestos a esforzarse al máximo para
          alcanzar sus metas y ayudar a quienes los rodean. Son amables y
          acogedores, creando un ambiente cálido y amistoso donde todos se
          sienten bienvenidos. A menudo se les subestima, pero su verdadera
          fortaleza radica en su capacidad para perseverar y mantenerse fieles a
          sus valores incluso en tiempos difíciles.
        </p>
      </div>
    </article>
  );
}

export default Hufflepuff;
