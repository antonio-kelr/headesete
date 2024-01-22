const barss = document.querySelector('#barss')
const barsAbri = document.querySelector('#bars-abri')
barss.addEventListener('click', function(e) {
    barsAbri.classList.add('abri')
})

barsAbri.addEventListener('click', function(e) {
    barsAbri.classList.remove('abri')
})