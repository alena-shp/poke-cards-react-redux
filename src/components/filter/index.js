import React, { useState } from 'react'
import { connect } from "react-redux"
import './filter.scss'
import { filterPokemon } from "./../../actions/filter"

const Filter = ({ filterPokemon }) => {
  const [filterName, setFilterName] = useState("")

  const onChangeName = (e) => {
    const filterName = e.target.value
    setFilterName(filterName)
    filterPokemon(filterName)
  }
  return (
    <div className="filter">
      <input
        className="filter__input"
        type="text"
        placeholder="Еnter pokemon name..."
        value={filterName}
        onChange={onChangeName}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  filterPokemon: (filterName) => dispatch(filterPokemon(filterName)),
})
export default connect(null, mapDispatchToProps)(Filter)
