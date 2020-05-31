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
    return this._transformDetails(details)
  }

  detAbilityPokemon = async id => {
    const ability = await this.getAnswer(`/ability/${id}/`)
    return this._transformAbility(ability)
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

  _transformDetails = details => {
    const abilities = details.abilities.map(e => ({
      name: e.ability.name,
      id: this.getIdItem(e.ability)
    }))
    const type = details.types.map(e => e.type.name)
    return {
      abilities,
      type,
      imgPoke: details.sprites.front_default,
      speed: details.stats[0].base_stat,
      defense: details.stats[3].base_stat,
      attack: details.stats[4].base_stat,
      hitPoints: details.stats[5].base_stat
    }
  }

  _transformAbility = ability => {
    const description = ability.effect_entries.map(e => e.effect)
    return description[0]
  }
}
