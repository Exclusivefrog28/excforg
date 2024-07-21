const title = document.getElementById('title')

const firstText = 'exclusivefrog28'
const secondText = 'excfrog'
const thirdText = 'excf.org'

const first = setInterval(() => {
    title.innerText += firstText[title.innerText.length]
    if (title.innerText.length === firstText.length) {
        clearInterval(first);
        setTimeout(() => {
            const firstDelete = setInterval(() => {
                title.innerText = title.innerText.slice(0, -1)
                if (title.innerText.length === 3) {
                    clearInterval(firstDelete);
                    const second = setInterval(() => {
                        title.innerText += secondText[title.innerText.length]
                        if (title.innerText.length === secondText.length) {
                            clearInterval(second);
                            setTimeout(() => {
                                const secondDelete = setInterval(() => {
                                    title.innerText = title.innerText.slice(0, -1)
                                    if (title.innerText.length === 4) {
                                        clearInterval(secondDelete);
                                        const third = setInterval(() => {
                                            title.innerText += thirdText[title.innerText.length]
                                            if (title.innerText.length === thirdText.length) {
                                                clearInterval(third);
                                                document.getElementById('anykey').dataset.show = 'true';
                                            }
                                        }, 250)
                                    }
                                }, 50)
                            }, 200)
                        }
                    }, 150)
                }
            }, 50);
        }, 200)
    }
}, 100);

window.addEventListener('keydown', () => {
    anykeypressed();
})
window.addEventListener('click', () => {
    anykeypressed();
})

const anykeypressed = () => {
    document.getElementById('hero').style.transform = 'translateY(-100%)';
    setTimeout(() => {
        document.getElementById('hero').style.display = 'none';
        document.getElementById('content').style.display = 'flex';
    }, 300);
}