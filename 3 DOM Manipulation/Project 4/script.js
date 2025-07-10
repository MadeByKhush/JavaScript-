// Select elements
const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('itemList');

// Add event listener to button
addBtn.addEventListener('click', function () {
  const itemText = input.value.trim();

  if (itemText !== '') {
    const li = document.createElement('li');
    li.textContent = itemText;
    list.appendChild(li);
    input.value = ''; // Clear input
    input.focus();    // Focus back on input
  } else {
    alert("Please enter a valid item!");
  }
});
