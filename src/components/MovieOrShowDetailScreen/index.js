import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./index.css";

class MovieOrShowDetailScreen extends Component {
  state = { itemDetails: {}, isLoading: false };
  componentDidMount() {
    this.getMovieOrShowDetails();
  }

  getMovieOrShowDetails = async () => {
    const url = ` https://api.rapidmock.com/api/vikuman/v1/movies?id=1245`;
    const response = await fetch(url);
    const eachItem = await response.json();

    const formattedData = {
      id: eachItem.id,
      title: eachItem.title,
      type: eachItem.type,
      description: eachItem.description,
      posterUrl: eachItem.poster_url,
      rating: eachItem.rating,
      releaseDate: eachItem.release_date,
      genre: eachItem.genre,
    };

    this.setState({ itemDetails: formattedData, isLoader: false });
    console.log(formattedData);
  };

  render() {
    const { itemDetails, isLoading } = this.state;
    const { title, type, releaseDate, rating, description, posterUrl } =
      itemDetails;
    return (
      <div className="container product-container">
        <div className="row">
          {isLoading ? (
            <div className="loader-container">
              <ThreeDots height={80} width={80} color="#0b69ff" />
            </div>
          ) : (
            <>
              <div className="col-12">
                <div className="back-arrow-con">
                  <MdOutlineKeyboardBackspace className="back-arrow" />
                  <h1 className="product-title">Title</h1>
                </div>
              </div>
              <div className="col-12">
                <div className="product-details">
                  <div>
                    <img src={posterUrl} alt={title} className="product-img" />
                  </div>
                  <div>
                    <h1 className="product-title">{title}</h1>
                    <p className="product-type">
                      <b>Movie/Show: </b>
                      {type}
                    </p>
                    <p className="product-type">
                      <b>release date: </b>
                      {releaseDate}
                    </p>
                    <p className="product-type">
                      <b>rating: </b>
                      {rating}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <h1>Description: </h1>
                <p className="product-des">{description}</p>
              </div>
              <div className="col-12 product-btn-con">
                <div>
                  <button className="to-watch-btn">To Watch</button>
                  <button className="watched-btn">Watched</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default MovieOrShowDetailScreen;
