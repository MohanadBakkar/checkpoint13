import React from 'react';

const Filter = ({ filterTitle, filterRate, onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <label>
        Filter by Title:
        <input type="text" value={filterTitle} onChange={onTitleChange} />
      </label>
      <label>
        Filter by Rating:
        <input type="number" value={filterRate} onChange={onRateChange} />
      </label>
    </div>
  );
};

export default Filter;