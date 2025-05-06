function onButtonClick() {
    alert('Button clicked!');
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', onButtonClick);
  
  const newButton = document.createElement('button');
  newButton.textContent = 'Click here to return back to homepage!';
  document.body.appendChild(newButton);
  