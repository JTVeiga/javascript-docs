// --- Directions
//   Given a node, validate the binary search tree,
//   ensuring that every node's left hand child is
//   less than the parent node's value, and that
//   every node's right hand child is greater than
//   the parent

function validate(node, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
  if (node.data > max) return false;
  if (node.data < min) return false;

  // When going to the left, a new "max" is assigned
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  // When going to the right, a new "min" is assigned
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
