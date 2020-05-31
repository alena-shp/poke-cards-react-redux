export const getFilteredName = state => {
  if (!state.filter.filterName) {
    return state.names
  }

  return {
    ...state.names,
    names: [
      ...state.names.names.filter(
        e => e.name.indexOf(state.filter.filterName) >= 0
      )
    ]
  }
}
