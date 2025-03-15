```javascript
// Change text content
document.getElementById('change-text-button').addEventListener('click', function() {
    document.getElementById('dynamic-text').textContent = 'Text changed dynamically!';
});

// Modify CSS styles
document.getElementById('change-style-button').addEventListener('click', function() {
    let styledDiv = document.getElementById('styled-div');
    styledDiv.style.backgroundColor = 'lightgreen';
    styledDiv.style.borderRadius = '50%';
});

// Add or remove element
let elementAdded = false;
document.getElementById('add-remove-button').addEventListener('click', function() {
    let elementSection = document.getElementById('element-section');
    if (elementAdded) {
        let newElement = document.getElementById('new-element');
        elementSection.removeChild(newElement);
        elementAdded = false;
    } else {
        let newElement = document.createElement('p');
        newElement.id = 'new-element';
        newElement.textContent = 'New element added!';
        elementSection.appendChild(newElement);
        elementAdded = true;
    }
});
```

