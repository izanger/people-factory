const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const age = form.age.value
  const hairColor = form.hairColor.value
  const birthPlace = form.birthPlace.value

  const colorDiv = `
    <div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>
  `
//   details.innerHTML = `<em>${personName}</em>`

//   const em = document.createElement('em')
//   em.textContent = personName
//   details.appendChild(em)

//   const ul = document.createElement('ul')
//   details.appendChild(ul)

//   const li1 = document.createElement('li')
//   li1.textContent = 'Name: ' + personName
//   ul.appendChild(li1)

//   const li2 = document.createElement('li')
//   li2.textContent = 'Hair Color: ' + form.hairColor.value
//   ul.appendChild(li2)

  details.innerHTML = `
    <ul>
        <li>Name: ${personName}</li>
        <li>Hair Color: ${colorDiv}</li>
        <li>Age: ${age}</li>
        <li>Birthlace: ${birthPlace}</li>
    </ul>
  `
}

personForm.onsubmit = handleSubmit //no parentheses
