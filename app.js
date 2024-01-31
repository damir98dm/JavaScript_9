let input = document.querySelector('.input'),
    btn   = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    gameBlock = document.querySelector('.game__block'),
    score = 0,
    gameTime = 0,
    interval = 0;
    
    
btn.addEventListener('click', () => {
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
        clearInterval(interval)
        score = 0
        start()
    }
})

gameBlock.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})


function start() {
    timeOut.innerHTML = gameTime
    interval = setInterval(() => decrease(), 1000)
    createBall()
}

function decrease() {
    if(gameTime == 0) {
        end()
    }else {
        timeOut.innerHTML = --gameTime
    }
}

function end() {
    gameBlock.innerHTML = `<h2 class="result">Вы набрали ${score} баллов</h2>`
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let figure = ['ball-rounded', 'ball-triangle', 'ball-square']
    ball.classList.add(figure[random(0,figure.length - 1)])
    let size = random(20,100)
    
    let { width, height } = gameBlock.getBoundingClientRect()
    
    let leftValue = random(0, width - size)
    let topValue  = random(0, height - size)
    
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.left = leftValue + 'px'
    ball.style.top = topValue + 'px'
    let colors  = ['purple','red','yellow','pink','blue','green','white']

    ball.style.background = colors[random(0,colors.length - 1)]

   gameBlock.append(ball)
    
}

function random(min,max) {
    return Math.floor( Math.random() * (max + 1 - min) + min )
}



