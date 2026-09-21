function Card({ image, title, description, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <h3>{title}</h3>

      <p>{description}</p>

      <a href={link} target="_blank" rel="noreferrer">
        <button>Learn More</button>
      </a>
    </div>
  );
}

export default Card;