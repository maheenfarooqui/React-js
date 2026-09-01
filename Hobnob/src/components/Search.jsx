import React from "react";

const Search = () => {
  return (
    <>
      <section className="search-section">
        <div className="search-box">
          <span className="search-icon">⌕</span>

          <input type="text" placeholder="Search for Father's Day Heart..." />

          <button className="search-btn">→</button>
        </div>
      </section>

      <section className="offer-section">
        <div className="offer-content">
          

          <span className="offer-text">Flat</span>

          <span className="offer-number">20</span>

          <span className="offer-percent">% Off</span>
        </div>
      </section>
    </>
  );
};

export default Search;
