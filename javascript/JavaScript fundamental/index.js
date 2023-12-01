// Q-1 Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

// Use Object.keys() to get all the keys of the second object.
// Use Array.prototype.every(), Object.prototype.hasOwnProperty() and strict comparison to determine if all keys exist in the first object and have the same values.




const matches = (obj, source) => 
Object.keys(source).every(key =>  obj.hasOwnProperty(key) && obj[key] === source[key] )
    // console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); 
    // console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); 
    // console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); 


// Q-2Write a JavaScript program to copy a string to the clipboard.

// Create a new <textarea> element, fill it with the supplied data and add it to the HTML document.
// Use Selection.getRangeAt()to store the selected range (if any).
// Use Document.execCommand('copy') to copy to the clipboard.
// Remove the <textarea> element from the HTML document.
// Finally, use Selection().addRange() to recover the original selected range (if any).

const clipboard = () =>{
    document.createElement(textarea)
}