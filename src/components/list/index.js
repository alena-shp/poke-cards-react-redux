import React from 'react'
import { Link } from 'react-router-dom'
import './list.scss'
import Filter from './../filter'

const List = ({ namesData, filteredNames }) => {
  console.log(namesData, filteredNames)
  const { loading, err } = namesData

  const listItem =
    filteredNames.names &&
    filteredNames.names.map(item => {
      return (
        <Link to={`/details/${item.id}`} className="list__item" key={item.id}>
          <p className="list__item-name">{item.name}</p>
          <img
            className="list__item-img"
            src="https://via.placeholder.com/200x150"
            alt=""
          />
        </Link>
      )
    })

  const content = loading ? (
    <p className="loading">Loading...</p>
  ) : err ? (
    <p>{err}</p>
  ) : (
    listItem
  )
  return (
    <div className="list">
      <Filter />
      <div className="list__items">{content}</div>
    </div>
  )
}

export default List
