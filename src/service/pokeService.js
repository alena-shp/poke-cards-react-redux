export default class pokeService {
  _nameUrl = 'https://pokeapi.co/api/v2'

  getAnswer = async url => {
    const res = await fetch(`${this._nameUrl}${url}`)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
  }

  getAllPokemons = async () => {
    const res = await this.getAnswer(`/pokemon/`)
    return res.results.map(this._transformPokemon)
  }

  getPokemon = async id => {
    const details = await this.getAnswer(`/pokemon/${id}/`)
    return details
  }

  detAbilityPokemon = async id => {
    const ability = await this.getAnswer(`/ability/${id}/`)
    return ability
  }

  getIdItem = item => {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformPokemon = pokemon => {
    return {
      name: pokemon.name,
      id: this.getIdItem(pokemon)
    }
  }
}
