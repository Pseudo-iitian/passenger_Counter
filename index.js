let count = parseInt(document.getElementById('count-el').innerText)
const increment = () => {
  count = count + 1
  document.getElementById('count-el').innerText = count
}

function save(){
  if(count) document.getElementById('save-el').textContent += count + " - "
}

function reset(){
  document.getElementById('count-el').textContent=0
  count = 0
  document.getElementById('save-el').textContent = 'Previous entries: '
}
