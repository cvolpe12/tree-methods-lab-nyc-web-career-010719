function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(currentNode, newNode){
  if (currentNode == newNode) {
    return true
  }
  if (currentNode.data > newNode.data) {
    if (currentNode.left) {
      return findOrAdd(currentNode.left, newNode)
    } else {
      return currentNode.left = newNode
    }
  } else if (currentNode.data < newNode.data) {
    if (currentNode.right) {
      return findOrAdd(currentNode.right, newNode)
    } else {
      return currentNode.right = newNode
    }
  }
}

function max(currentNode){
  if (currentNode.right) {
    return max(currentNode.right)
  } else {
    return currentNode
  }
}

function min(currentNode){
  if (currentNode.left) {
    return min(currentNode.left)
  } else {
    return currentNode
  }
}
