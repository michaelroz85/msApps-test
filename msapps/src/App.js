
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchImages, selectPage, selectCategory, selectSortBy } from "./actions";
import ImageList from "./components/ImageList"
import "./App.css"
function App({ images, category, page, sortBy, fetchImages, selectPage, selectCategory, selectSortBy }) {
  const [customCategory, setCustomCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  images = images.items;
  useEffect(() => {
    fetchImages(category, page, sortBy);
  }, [category, page, sortBy]);

  function handleSortBy(event) {
    selectSortBy(event.target.value);
  }

  function handleCustomCategoryChange(event) {
    setCustomCategory(event.target.value);
  }

  function handleCustomCategorySubmit(event) {
    event.preventDefault();
    selectCategory(customCategory);
    setCustomCategory("");
  }

  function handlePrevPage() {
    selectPage(page - 1);
  }

  function handleNextPage() {
    selectPage(page + 1);
  }

  return (
    <div className="main">
      <div className="buttons">
        <button onClick={handlePrevPage} disabled={page === 1} className="button button--left">
          Prev
        </button>
        <span>page {page}</span>
        <button onClick={handleNextPage} className="button button--right">Next</button>
      </div>
      <h1>MSApps Image Gallery</h1>
       {/* select the category */}
      <button onClick={() => setIsOpen(!isOpen)} className="button"> {isOpen ? 'Close' : 'Select a category'}</button>
      {isOpen && (
        <div className="category-container">
          <div>
            <label htmlFor="sortBy">Sort by:</label>
            <select id="sortBy" value={sortBy} onChange={handleSortBy}>
              <option value="id">Id</option>
              <option value="date">Date</option>
            </select>
          </div>
          <div>
            <form onSubmit={handleCustomCategorySubmit}>
              <label htmlFor="customCategory">Category:</label>
              <input
                id="customCategory"
                type="text"
                value={customCategory}
                onChange={handleCustomCategoryChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <h3>{category} images</h3>
      <div>
        {/* show the images */}
        {images && <ImageList images={images} />}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    images: state.images,
    category: state.category,
    page: state.page,
    sortBy: state.sortBy,
  };
}

const mapDispatchToProps = {
  fetchImages,
  selectPage,
  selectCategory,
  selectSortBy
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

