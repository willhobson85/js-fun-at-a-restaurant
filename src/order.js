function takeOrder(orderNumber, typeOfOrder) {
  if (typeOfOrder.length < 3) {
    return typeOfOrder.push(orderNumber)
  }
    return typeOfOrder
}

function refundOrder(ordNumber, arrayOrder) {
  for (var i = 0; i < arrayOrder.length; i++) {
    if (ordNumber === arrayOrder[i].orderNumber) {
          arrayOrder.splice(i, 1)
        }
    }
}

function listItems(deliveryOrders) {
  var entree = [];
    for (var i = 0; i < deliveryOrders.length; i++) {
        entree.push(deliveryOrders[i].item);
    }
    return entree.join(', ');
}

function searchOrder(deliveryOrders, food) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === food) {
      return true
    }
  }
      return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
