/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */

const s = new Set();
function Add(element) {
  s.add(element);
}
const removeDuplicateItems = (items) => {
  items.forEach(Add);
  const arr = Array.from(s);
  return arr;
};

module.exports = removeDuplicateItems;
