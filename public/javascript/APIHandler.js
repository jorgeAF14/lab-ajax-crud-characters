class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create(baseUrl)
  }

  getFullList () {
    return this.axiosApp.get('/characters')
  }

  getOneRegister(characterId) {
    return this.axiosApp.get(`/characters/${characterId}`)

  }

  createOneRegister (infoCharacter) {
    return this.axiosApp.post('/characters', infoCharacter)
  }

  updateOneRegister(characterId, characterInfo) {
    return this.axiosApp.put(`/characters/${characterId}`, characterInfo)
  }

  deleteOneRegister(characterId) {
    return this.axiosApp.post(`/characters/${characterId}`)
  }
}
