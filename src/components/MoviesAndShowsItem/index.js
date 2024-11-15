import "./index.css";

const MoviesAndShowsItem = (props) => {
  const { itemDetails } = props;
  const { title, type, description, posterUrl } = itemDetails;

  return (
    <li className="item-container">
      <div>
        <img src={posterUrl} alt={title} className="image"/>
      </div>
      <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <button className="genre">{type}</button>
      </div>
    </li>
  );
};

export default MoviesAndShowsItem;
