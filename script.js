
document.getElementById('navbar').innerHTML = `
<form action="./index.html"><button>Forside</button></form>
<form action="./teori.html"><button>Teori</button></form>
<form action="./forsøg.html"><button>Forsøg</button></form>
<form action="./matematik.html"><button>Matematik</button></form>
<form action="./om-os.html"><button>Om Os</button></form>
`

coordSystem = document.getElementById('coordSystem')
const cs = coordSystem.getContext('2d')
cs.moveTo(0, 0)
cs.lineTo(200, 100)
cs.stroke()
