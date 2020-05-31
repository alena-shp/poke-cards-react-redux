import React from 'react'
import { Link } from 'react-router-dom'
import './list.scss'
import Filter from './../filter'

const List = ({ namesData, filteredNames }) => {
  const { loading, err } = namesData

  const listItem =
    filteredNames.names &&
    filteredNames.names.map(item => (
      <Link to={`/details/${item.id}`} className="list__item" key={item.id}>
        <p className="list__item-name">{item.name}</p>
        <img
          className="list__item-img"
          src="https://via.placeholder.com/200x150"
          alt=""
        />
      </Link>
    ))

  return (
    <div className="list">
      <Filter />
      <div className="list__items">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : err ? (
          <p>{err}</p>
        ) : (
          listItem
        )}
      </div>
    </div>
  )
}

export default List
