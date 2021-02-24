
omkredsInput = document.getElementById('omkreds')
volumeOutput = document.getElementById('rumfang')

omkredsInput.addEventListener('change', () => {
    let omkreds = omkredsInput.value
    if (!isNaN(omkreds)) {
        omkreds = +omkreds
        let radius = omkreds / (Math.PI * 2)
        let volume = (4 / 3) * Math.PI * radius ** 3
        volumeOutput.innerHTML = "Rumfanget er: " + volume.toFixed(2)
    }
})
