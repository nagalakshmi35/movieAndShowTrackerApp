import "./index.css";

const WatchItem = (props) => {
    const {itemDetails} = props 
    const {title, updatedAt, posterUrl} = itemDetails ;
  return ( 
    <li className="watch-con">
      <img src={posterUrl} alt={title} className="watch-item-img" />
      <h1 className="watch-item-title">{title}</h1>
      <p className="update">{updatedAt}</p>
    </li>
  );
};

export default WatchItem;
