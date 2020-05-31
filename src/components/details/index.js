import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import './details.scss'

import { detailsFetch } from './../../actions/details'

const Details = props => {
  const id = props.match.params.id
  const { loading, err } = props.detailsData
  const { abilities, type, imgPoke, speed, defense, attack, hitPoints } = props.detailsData.details

  const { detailsFetch } = props
  useEffect(() => {
    detailsFetch(id)
  }, [detailsFetch, id])

  const ability =
    abilities &&
    abilities.map((e) => (
      <ul key={e.id}>
        <li>
          <Link to={`/ability/${e.id}`}>{e.name}</Link>
        </li>
      </ul>
    ))

  return loading ? (
    <p>Loading...</p>
  ) : err ? (
    <p>{err}</p>
  ) : (
    <div className="details">
      <h1 className="details__title">Name</h1>
      <div className="details__feature-block">
        <div className="details__item">
          <h3 className="details__item-title">Hit Points</h3>
          <p className="details__item-num">{hitPoints}</p>
        </div>
        <div className="details__item">
          <h3 className="details__item-title">Attack</h3>
          <p className="details__item-num">{attack}</p>
        </div>
        <div className="details__item">
          <h3 className="details__item-title">Defense</h3>
          <p className="details__item-num">{defense}</p>
        </div>
        <div className="details__item">
          <h3 className="details__item-title">Spend</h3>
          <p className="details__item-num">{speed}</p>
        </div>
      </div>
      <div className="details__img">
        <img src={imgPoke} alt="" />
      </div>
      <div className="details__type">
        <h3 className="details__type-title">Type</h3>
        <p className="details__type-name">{type}</p>
      </div>
      <div className="details__abilities">
        <h3 className="details__abilities-title">Ability</h3>
        {ability}
      </div>
      <button onClick={() => props.history.goBack()}>Back</button>
    </div>
  )
}

const mapStateToProps = state => ({ detailsData: state.details })

const mapDispatchToProps = dispatch => {
  return {
    detailsFetch: id => dispatch(detailsFetch(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
