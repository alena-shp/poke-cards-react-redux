import React from 'react'
import './filter.scss'

const Filter = props => {
  return (
    <div className="filter">
      <input
        className="filter__input"
        type="text"
        placeholder="Еnter pokemon name..."
        value=""
        onChange={() => {}}
      />
    </div>
  )
}

export default Filter
