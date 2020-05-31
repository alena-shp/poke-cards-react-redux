import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { namesFetch } from "./../actions/names"
import { getFilteredName } from './../selectors'
import List from './../components/list'

const ListContainer = ({ namesData, namesFetch, filteredNames }) => {
  useEffect(() => {
    namesFetch()
  }, [namesFetch])

  return <List namesData={namesData} filteredNames={filteredNames} />
}

const mapStateToProps = state => ({
  namesData: state.names,
  filteredNames: getFilteredName(state)
})

export default connect(mapStateToProps, { namesFetch })(ListContainer)
