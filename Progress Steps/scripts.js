const progress = document.getElementById('progress')
const progress = document.getElementById('prev')
const progress = document.getElementById('next')
const progress = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if(currentActive > circles.length) {
    currentActive = circles.length
  }

})

prev.addEventListener('click', () => {
  currentActive--

  if(currentActive < 1) {
    currentActive = 1
  }

  update()
  
})

function update() {
  circles.forEach((circle, idx) => {
    if(idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })


  const actives = document.querySelectorAll('.active')

  progress.style.width = (actives.lemgth-1) / (circles.length -1) *100 + '%'

  if(currentActive === 1) {
    prev.disabled = true
  } else if(currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}