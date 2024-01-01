const uList = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");
// Create a function that will run in response to the button being clicked.

btn.addEventListener("click", myFunction);
item.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    myFunction();
  }
});

function myFunction() {
  let typedInput = document.getElementById("item").value;
  document.getElementById("item").value = ""; //sets the value back to empty string.
  document.getElementById("item").focus();
  const myListItem = document.createElement("li");
  const mySpan = document.createElement("span");
  const myButton = document.createElement("button");
  myListItem.appendChild(mySpan);
  myListItem.appendChild(myButton);
  mySpan.textContent = typedInput;
  myButton.textContent = "Delete";
  uList.appendChild(myListItem);

  myButton.addEventListener("click", function () {
    uList.removeChild(myListItem);
  });
}

// Create a function that will run in response to the button being clicked.
// Inside the function body, start off by storing the current value of the input element in a variable.
// Next, empty the input element by setting its value to an empty string — ''.
// Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
// Append the span and the button as children of the list item.
// Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
// Append the list item as a child of the list.
// Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
// Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
