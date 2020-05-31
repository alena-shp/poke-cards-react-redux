import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Ability from './../components/ability'
import { abilityFetch } from './../actions/ability'

const AbilityContainer = props => {
  const id = props.match.params.id

  const { abilityFetch } = props
  useEffect(() => {
    abilityFetch(id)
  }, [abilityFetch, id])

  return <Ability history={props.history} abilityData={props.abilityData} />
}

const mapStateToProps = state => ({ abilityData: state.ability })

const mapDispatchToProps = dispatch => {
  return {
    abilityFetch: id => dispatch(abilityFetch(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AbilityContainer)
