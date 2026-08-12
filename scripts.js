// Getting Relevant Elements

const itemInput = document.getElementById("item-input")
const form = document.getElementById("input-wrapper")
const itens = document.querySelector("ul")

// Input Logic + Regex

itemInput.addEventListener("input",() =>{
  const hasNumbersRegex = /\d+/g
  itemInput.value = itemInput.value.replace(hasNumbersRegex,"")
})

// Form Submit

form.addEventListener("submit",(event) => {
  event.preventDefault()
  const newItem = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  const item = document.createElement("span")
  const trashIcon = document.createElement("button")

  checkbox.type = "checkbox"
  item.textContent = itemInput.value
  trashIcon.id = "delete-button"

  label.append(checkbox,item)
  newItem.append(label,trashIcon)
  itens.append(newItem)
  itemInput.value = ""
  itemInput.focus()
})