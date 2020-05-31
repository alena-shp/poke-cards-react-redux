import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { namesFetch } from './../../actions/names'
import './list.scss'

const List = ({ namesData, namesFetch }) => {
  console.log(namesData)
  const { loading, names, err } = namesData
  useEffect(() => {
    namesFetch()
  }, [namesFetch])

  const listItem = names.map(item => {
    return (
      <ul key={item.id}>
        <li>{item.name}</li>
        <Link to={`/details/${item.id}`}>
            <img src="https://via.placeholder.com/220x150" alt="" />
          </Link>
      </ul>
    )
  })

  const content = loading ? <p>Loading...</p> : err ? <p>{err}</p> : listItem
  return <div className="list">{content}</div>
}

const mapStateToProps = state => ({
  namesData: state
})

export default connect(mapStateToProps, { namesFetch })(List)
