import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Details from '../components/details'
import { detailsFetch } from '../actions/details'

const DetailsContainer = props => {
  const id = props.match.params.id

  const { detailsFetch } = props
  useEffect(() => {
    detailsFetch(id)
  }, [detailsFetch, id])

  return <Details history={props.history} detailsData={props.detailsData}/>
  
}

const mapStateToProps = state => ({ detailsData: state.details })

const mapDispatchToProps = dispatch => {
  return {
    detailsFetch: id => dispatch(detailsFetch(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
