import React from 'react'
import { Link } from 'react-router-dom'
import './details.scss'
import backImg from './../../assets/backImg.png'

const Details = ({ detailsData, history }) => {
  const { loading, err } = detailsData
  const {
    name,
    abilities,
    type,
    imgPoke,
    speed,
    defense,
    attack,
    hitPoints
  } = detailsData.details

  const ability =
    abilities &&
    abilities.map(e => (
      <li key={e.id} className="details__abilities-item">
        <Link to={`/ability/${e.id}`} className="details__abilities-link">
          {e.name}
        </Link>
      </li>
    ))

  return loading ? (
    <p className="loading">Loading...</p>
  ) : err ? (
    <p>{err}</p>
  ) : (
    <div className="details">
      <h1 className="details__title">{name}</h1>
      <p className="details__type">{type}</p>
      <div className="details__img">
        <img src={imgPoke} alt="" />
      </div>
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
      <div className="details__abilities">
        <h3 className="details__abilities-title">Ability</h3>
        <ul className="details__abilities-items">{ability}</ul>
      </div>
      <span onClick={() => history.goBack()} className="action-back">
        <img className="action-back__img" src={backImg} alt="" />
        Back
      </span>
    </div>
  )
}

export default Details
