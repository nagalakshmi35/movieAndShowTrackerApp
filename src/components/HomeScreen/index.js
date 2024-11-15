import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import TopNavbar from "../TopNavbar";
import MoviesAndShowsItem from "../MoviesAndShowsItem";
import TabItem from "../TabItem";
import SortFilterFeatures from "../SortFilterFeatures";
import { IoIosSearch } from "react-icons/io";
import "./index.css";

class HomeScreen extends Component {
  state = {
    moviesAndShowsList: [],
    isLoading: true,
    searchInput: "",
    filteredListItems: [],
    isSorted: false,
  };

  componentDidMount() {
    this.getMoviesAndShows();
  }

  getMoviesAndShows = async () => {
    const url = `https://api.rapidmock.com/api/vikuman/v1/movies/all`;
    const response = await fetch(url);
    const data = await response.json();
    const formattedData = data.map((eachItem) => ({
      id: eachItem.id,
      title: eachItem.title,
      type: eachItem.type,
      description: eachItem.Description,
      posterUrl: eachItem.poster_url,
    }));

    this.setState({
      moviesAndShowsList: formattedData,
      isLoading: false,
      filteredListItems: formattedData,
    });
  };

  onChangeInputEle = (event) => {
    const { moviesAndShowsList } = this.state;

    const filteredList = moviesAndShowsList.filter((eachItem) =>
      eachItem.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

    this.setState({
      searchInput: event.target.value,
      filteredListItems: filteredList,
    });
  };

  sortItemsList = () => {
    const { moviesAndShowsList, isSorted } = this.state;

    if (isSorted === true) {
      this.setState((prevState) => {
        const unSortedItems = moviesAndShowsList.sort((a, b) => a.id - b.id);
        return {
          isSorted: !prevState.isSorted,
          filteredListItems: unSortedItems,
        };
      });
    } else {
      this.setState((prevState) => {
        const sortedItems = moviesAndShowsList.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        return {
          isSorted: !prevState.isSorted,
          filteredListItems: sortedItems,
        };
      });
    }
  };

  render() {
    const { filteredListItems, isLoading, searchInput } = this.state;

    return (
      <div className="container app-container">
        <div className="row">
          <div className="col-12">
            <TopNavbar />
          </div>
          <div className="col-12 search-container">
            <input
              placeholder="Search Movies/Shows/Genre"
              type="search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeInputEle}
            />
            <IoIosSearch className="search-icon" />
          </div>
          <div className="col-12">
            <SortFilterFeatures sortItemsList={this.sortItemsList} />
          </div>
          <div className="col-12">
            {isLoading ? (
              <div className="loader-container">
                <ThreeDots height={90} width={90} color="#0b69ff" />
              </div>
            ) : (
              <ul className="list-container">
                {filteredListItems.map((eachItem) => (
                  <MoviesAndShowsItem
                    itemDetails={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            )}
          </div>
          <div className="col-12">
            <TabItem />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
