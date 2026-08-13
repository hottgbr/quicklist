// Getting Relevant Elements

const itemInput = document.getElementById("item-input")
const form = document.getElementById("input-wrapper")
const itens = document.querySelector("ul")
const main = document.querySelector("main")


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
  const trashButton = document.createElement("button")

  checkbox.type = "checkbox"
  item.textContent = itemInput.value

  trashButton.type = "button"
  trashButton.id = "delete-button"
  trashButton.classList.add("delete-button")

  label.append(checkbox,item)
  newItem.append(label,trashButton)
  itens.append(newItem)
  itemInput.value = ""
  itemInput.focus()
})

// Delete Item Logic

itens.addEventListener("click", (event) =>{
  const deleteButton = event.target.closest(".delete-button")
  if (!deleteButton){
    return
  }  
  const elementToDelete = deleteButton.closest("li")
  elementToDelete.remove()
  showDeleteMessage()
  const footer = document.querySelector("footer")
  footer.addEventListener("click", (event) =>{
    const deleteCardButton = event.target.closest(".delete-card-button")
    if (!deleteCardButton){
      return
    }  
    const elementToDelete = deleteCardButton.closest("footer")
    elementToDelete.remove()
  })
})

function showDeleteMessage() {
  const existingMessage = document.querySelector(".delete-card")

  if (existingMessage) {
    return
  }

  const deleteCard = document.createElement("footer")
  deleteCard.classList.add("grid")
  deleteCard.classList.add("grid-flow-col")

  const exclamationMark = document.createElement("img")
  exclamationMark.id = "exclamation-mark"
  exclamationMark.classList.add("exclamation-mark")

  const deleteSpan = document.createElement("span")
  deleteSpan.textContent = "O item foi removido da lista"

  const deleteCardButton = document.createElement("button")
  deleteCardButton.type = "button"
  deleteCardButton.classList.add("delete-card-button")

  deleteCard.append(exclamationMark,deleteSpan,deleteCardButton)
  deleteCard.classList.add("delete-card")
  deleteCard.id = "delete-card"
  main.append(deleteCard)
}

