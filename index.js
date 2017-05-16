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
  //details.innerHTML = `<em>${personName}</em>`

//external looping function method
  addList(details, form)

  //simple homework solution
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

//   const li3 = document.createElement('li')
//   li3.textContent = 'Age: ' + form.age.value
//   ul.appendChild(li3)

//   const li4 = document.createElement('li')
//   li4.textContent = 'Birthplace: ' + form.birthPlace.value
//   ul.appendChild(li4)


//easy visual way
//   details.innerHTML = `
//     <ul>
//         <li>Name: ${personName}</li>
//         <li>Hair Color: ${colorDiv}</li>
//         <li>Age: ${age}</li>
//         <li>Birthplace: ${birthPlace}</li>
//     </ul>
//   `


}

personForm.addEventListener('submit', handleSubmit) //addEventListener can be used multiple times on the same thing

function addList(addBeneath, form) {
    //var elements = form.elements;
    var elements = form.getElementsByTagName('input')
    var labels = form.getElementsByTagName('label')
    
    const ul = document.createElement('ul')
    addBeneath.appendChild(ul)
    for(var i = 0; i < elements.length; i++){
        if(labels[i].nodeName === 'LABEL'){
          const li = document.createElement('li')
      
          if(labels[i].textContent === "Hair Color"){
            alert("MADE IT")
            li.textContent = labels[i].textContent + ': '
            ul.appendChild(li)
            box = document.createElement('div')
            box.style.height = '50px'
            box.style.width = '100px'
            box.style.backgroundColor = elements[i].value
            li.appendChild(box)
            continue
          }

          li.textContent = labels[i].textContent + ': ' + elements[i].value
          ul.appendChild(li)
        }

    }

}