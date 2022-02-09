const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
       .getFullList()
       .then(response => {
         let text = ''
         response.data.reverse().forEach(eachCharacter => text += toTextData(eachCharacter))         
         document.querySelector('.characters-container').innerHTML = text
        })
       .catch(err => console.log(err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector('#char-id').value   
    

    charactersAPI
      .getOneRegister(id)
      .then(response=>{      
        let text = toTextData(response.data)        
        document.querySelector('.characters-container').innerHTML = text
      })
       console.log(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.querySelector('#del-id').value
    charactersAPI
        .deleteOneRegister(characterId)
        .then()
        .catch(err => console.log(err))

    console.log(characterId)



  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const input = document.querySelectorAll('#edit-character-form input')
    console.log(input)
    characterId = input[0].value
    console.log(characterId)
    const infoCharacter = {
      name: input[1].value,
      occupation: input[2].value,
      weapon: input[3].value,
      cartoon: input[4].checked
    }
    charactersAPI

    .updateOneRegister(characterId, infoCharacter)
    console.log(infoCharacter)

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const input = document.querySelectorAll('#new-character-form input')

    console.log(input[0])
    const newCharacter = {
      name: input[0].value,
      occupation: input[1].value,
      weapon: input[2].value,
      cartoon: input[3].checked
    }
    
    charactersAPI
      .createOneRegister(newCharacter)
      .then()
      .catch(err => console.log(err))
    
    });

    function toTextData(character){
      let text = `<div class="character-info">
        <div class="name">nombre:${character.name}</div>
         <div class="occupation">ocupacion:${character.occupation}</div>
         <div class="cartoon">es un dibujo:${character.cartoon}</div>
         <div class="weapon">arma principal:${character.weapon}</div>
         </div>`

         return text

    }





});
