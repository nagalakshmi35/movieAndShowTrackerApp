import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import { TiTick } from "react-icons/ti";
import TopNavbar from "../TopNavbar";
import WatchItem from "../WatchItem";
import TabItem from "../TabItem";
import "./index.css";

class MyListScreen extends Component {
  state = { toWatchList: [], watchedList: [], isLoading: true };

  componentDidMount() {
    this.getMyListItems();
  }

  getMyListItems = async () => {
    const url = `https://api.rapidmock.com/api/vikuman/v1/mylist`;
    const response = await fetch(url);
    const data = await response.json();

    const toWatchListData = data["To Watch"].map((eachItem) => ({
      movieId: eachItem.movieId,
      posterUrl: eachItem.poster_url,
      title: eachItem.title,
      updatedAt: eachItem.updatedAt,
    }));

    const watchedListData = data["Watched"].map((eachItem) => ({
      movieId: eachItem.movieId,
      posterUrl: eachItem.poster_url,
      title: eachItem.title,
      updatedAt: eachItem.updatedAt,
    }));

    this.setState({
      toWatchList: toWatchListData,
      watchedList: watchedListData,
      isLoading: false,
    });
  };

  render() {
    const { toWatchList, watchedList, isLoading } = this.state;

    return (
      <div className="container list-screen-con">
        <div className="row">
          {isLoading ? (
            <div className="loader-con">
              <ThreeDots height={90} width={90} color="#0b69ff" />
            </div>
          ) : (
            <>
              <div className="col-12">
                <TopNavbar />
              </div>
              <div className="col-12">
                <button type="button" className="list-screen-btn">
                  <TiTick /> Watched
                </button>
              </div>
              <ul className="watch-item-con">
                {toWatchList.map((eachItem) => (
                  <WatchItem itemDetails={eachItem} key={eachItem.movieId} />
                ))}
              </ul>
              <div className="col-12">
                <button type="button" className="list-screen-btn">
                  <TiTick /> To Watch
                </button>
              </div>
              <ul className="watch-item-con">
                {watchedList.map((eachItem) => (
                  <WatchItem itemDetails={eachItem} key={eachItem.movieId} />
                ))}
              </ul>
              <div className="col-12">
                <TabItem />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default MyListScreen;
