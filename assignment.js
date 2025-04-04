function createStack() {
  const items = [];
  return {
    push(item) { items.push(item); },
    pop() { return items.pop(); },
    size() { return items.length; }
  };
}

// Your job: Write this function
function reverseWord(word) {
  // Your code here
}

// Test it
console.log(reverseWord("hello")); // Should print "olleh"
