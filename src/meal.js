function nameMenuItem(foodType) {
return `Delicious ${foodType}`
}

function createMenuItem(itemName, itemPrice, itemType) {
    return {
    name: itemName,
    price: itemPrice,
    type: itemType
  }
}

function addIngredients(newIngredient, ingredients) {
  if (ingredients.includes(newIngredient)) {
    return ingredients
  } else {
    return ingredients.push(newIngredient);
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(discount) {
  var salePrice = (discount * .90);
  return salePrice
}

function createRecipe(comboName, ingredients, whichMenu) {
return {
  title: comboName,
  ingredients: ingredients,
  type: whichMenu
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
