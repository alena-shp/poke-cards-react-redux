import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './ability.scss'

import { abilityFetch } from './../../actions/ability'

const Ability = props => {
  const id = props.match.params.id
  const { loading, ability, err } = props.abilityData

  const { abilityFetch } = props
  useEffect(() => {
    abilityFetch(id)
  }, [abilityFetch, id])

  return loading ? (
    <p>Loading...</p>
  ) : err ? (
    <p>{err}</p>
  ) : (
    <div className="ability">
      <h1 className="ability__title">Ability</h1>
      <p className="ability__text">{ability}</p>
      <button onClick={() => props.history.goBack()}>Back</button>
    </div>
  )
}

const mapStateToProps = state => ({ abilityData: state.ability })

const mapDispatchToProps = dispatch => {
  return {
    abilityFetch: id => dispatch(abilityFetch(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ability)
