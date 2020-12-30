const particles = () => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let particlesArray

    let mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 120) * (canvas.width / 120)
    }

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x
        mouse.y = event.y
    })

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x
            this.y = y
            this.directionX = directionX
            this.directionY = directionY
            this.size = size
            this.color = color
        }

        draw() {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
            ctx.fillStyle = this.color
            ctx.fill()
        }

        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX
            }
            if (this.y > canvas.width || this.y < 0) {
                this.directionY = -this.directionY
            }

            let dx = mouse.x - this.x
            let dy = mouse.y - this.y
            let distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < mouse.radius + this.size) {
                ctx.beginPath()
                ctx.moveTo(mouse.x, mouse.y)
                ctx.lineTo(this.x, this.y)
                ctx.stroke()
            }
            this.x += this.directionX / 3
            this.y += this.directionY / 3

            this.draw()
        }
    }

    const init = () => {
        particlesArray = []
        let numberOfParticles = (canvas.height * canvas.width) / 9000
        for (let i = 0; i < numberOfParticles; i++) {
            let size = Math.random() + 1
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2)
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2)
            let directionX = (Math.random() * 5) - 2.5
            let directionY = (Math.random() * 5) - 2.5
            let color = '#c5cbcd'
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color))
        }
    }

    const connect = () => {
        let opacityValue = 1
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                    + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y)) /* *2 */
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000)
                    ctx.strokeStyle = 'rgba(197, 203, 205, ' + opacityValue + ')'
                    ctx.lineWidth = 1
                    ctx.beginPath()
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
                    ctx.stroke()
                }
            }
        }
    }

    const animate = () => {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, innerWidth, innerHeight)
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update()
        }
        connect()
    }

    window.addEventListener('mousedown', () => {
        let size = Math.random() + 1
        let directionX = (Math.random() * 5) - 2.5
        let directionY = (Math.random() * 5) - 2.5
        let color = '#c5cbcd'
        particlesArray.push(new Particle(mouse.x, mouse.y, directionX, directionY, size, color))
    })

    window.addEventListener('resize', () => {
        canvas.width = innerWidth
        canvas.height = innerHeight
        mouse.radius = (canvas.height / 80) * (canvas.height / 80)
        init()
    })

    window.addEventListener('mouseout', () => {
        mouse.x = undefined
        mouse.y = undefined
    })

    init()
    animate()
}