const Favbet = 'Космолот, только не списывай точь в точь'
window.addEventListener('orientationchange', () => {
    window.location.reload()
});

const playBtn = document.querySelector('.play-btn'),
      main = document.querySelector('.bonus__main'),
      overlay = document.querySelector('.bonus__overlay'),
      popupFirst = document.querySelector('.bonus__firstWin'),
      popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
      popupSecond = document.querySelector('.bonus__secondWin'),
      overflow = document.querySelector('body'),
      wrapper = document.querySelector('.bonus'),
      bubbleText = document.querySelector('.bonus__main-bubble'),
      winOuter = document.querySelector('.outer-col-win')


//slots
var icons = [
    'win1.png','win2.png','win3.png','win4.png','win5.png','win6.png','win7.png','win8.png'
];

var slots = document.querySelector('.slots');
var cols = document.querySelectorAll('.col');

for(var i in cols) {
    if (!cols.hasOwnProperty(i))
        continue;
    var col = cols[i];
    var str = '';
    var firstThree = '';
    for(var x = 0; x < 30; x++) {
        var part = '<img class="icon" src="img/slots/'+icons[Math.floor(Math.random()*icons.length)]+'">';
        str += part
        if (x < 3) firstThree += part;
    }
    col.innerHTML =  str+firstThree;
}

(function startSlotsImg(){

    const startCol1 = ['win5.png','win6.png','win3.png','win5.png' ]
    const startCol2 = ['win6.png','win2.png','win8.png','win1.png']
    const startCol3 = ['win4.png','win8.png','win4.png','win7.png']
    const startCol4 = ['win5.png','win8.png','win6.png','win7.png']
    const startCol5 = ['win5.png','win6.png','win3.png','win5.png']


    const colsImg1 = Array.from(cols[0].querySelectorAll('img'))
    colsImg1[32].setAttribute('src', 'img/slots/'+ startCol1[0])
    colsImg1[31].setAttribute('src', 'img/slots/'+ startCol1[1])
    colsImg1[30].setAttribute('src', 'img/slots/'+ startCol1[2])
    colsImg1[29].setAttribute('src', 'img/slots/'+ startCol1[3])


    const colsImg2 = Array.from(cols[1].querySelectorAll('img'))
    colsImg2[32].setAttribute('src', 'img/slots/'+ startCol2[0])
    colsImg2[31].setAttribute('src', 'img/slots/'+ startCol2[1])
    colsImg2[30].setAttribute('src', 'img/slots/'+ startCol2[2])
    colsImg2[29].setAttribute('src', 'img/slots/'+ startCol2[3])

    const colsImg3 = Array.from(cols[2].querySelectorAll('img'))
    colsImg3[32].setAttribute('src', 'img/slots/'+ startCol3[0])
    colsImg3[31].setAttribute('src', 'img/slots/'+ startCol3[1])
    colsImg3[30].setAttribute('src', 'img/slots/'+ startCol3[2])
    colsImg3[29].setAttribute('src', 'img/slots/'+ startCol3[3])

    const colsImg4 = Array.from(cols[3].querySelectorAll('img'))
    colsImg4[32].setAttribute('src', 'img/slots/'+ startCol4[0])
    colsImg4[31].setAttribute('src', 'img/slots/'+ startCol4[1])
    colsImg4[30].setAttribute('src', 'img/slots/'+ startCol4[2])
    colsImg4[29].setAttribute('src', 'img/slots/'+ startCol4[3])

    const colsImg5 = Array.from(cols[4].querySelectorAll('img'))
    colsImg5[32].setAttribute('src', 'img/slots/'+ startCol5[0])
    colsImg5[31].setAttribute('src', 'img/slots/'+ startCol5[1])
    colsImg5[30].setAttribute('src', 'img/slots/'+ startCol5[2])
    colsImg5[29].setAttribute('src', 'img/slots/'+ startCol5[3])
})()

const win1Col1 = ['win5.png','win3.png','win6.png','win5.png']
const win1Col2 = ['win1.png','win1.png','win1.png','win1.png']
const win1Col3 = ['win4.png','win6.png','win8.png','win2.png']
const win1Col4 = ['win1.png','win4.png','win5.png','win3.png']
const win1Col5 = ['win5.png','win2.png','win7.png','win6.png']


const win2Col1 = ['win5.png','win6.png','win7.png','win8.png']
const win2Col2 = ['win3.png','win2.png','win8.png','win5.png']
const win2Col3 = ['win2.png','win4.png','win3.png','win7.png']
const win2Col4 = ['win2.png','win2.png','win2.png','win2.png']
const win2Col5 = ['win3.png','win6.png','win8.png','win7.png']

const colsImg1 = Array.from(cols[0].querySelectorAll('img'))
const colsImg2 = Array.from(cols[1].querySelectorAll('img'))
const colsImg3 = Array.from(cols[2].querySelectorAll('img'))
const colsImg4 = Array.from(cols[3].querySelectorAll('img'))
const colsImg5 = Array.from(cols[4].querySelectorAll('img'))

const colsImg1Two = Array.from(cols[0].querySelectorAll('img'))
const colsImg2Two = Array.from(cols[1].querySelectorAll('img'))
const colsImg3Two = Array.from(cols[2].querySelectorAll('img'))
const colsImg4Two = Array.from(cols[3].querySelectorAll('img'))
const colsImg5Two = Array.from(cols[4].querySelectorAll('img'))


let tries = 0;
function spin() {
    slots.classList.toggle('spinning', true);
    //Фикс для Сафари, который решил глотать последние картинки при прокрутке
    if (tries === 0){
        window.setTimeout(function() {
            const cols = document.querySelectorAll('.col');
            tries++;

            colsImg1[32].setAttribute('src', 'img/slots/'+ win1Col1[3])
            colsImg1[31].setAttribute('src', 'img/slots/'+ win1Col1[2])
            colsImg1[30].setAttribute('src', 'img/slots/'+ win1Col1[1])
            colsImg1[29].setAttribute('src', 'img/slots/'+ win1Col1[0])
            colsImg1[0].setAttribute('src', 'img/slots/'+ win1Col1[0])
            colsImg1[1].setAttribute('src', 'img/slots/'+ win1Col1[1])
            colsImg1[2].setAttribute('src', 'img/slots/'+ win1Col1[2])
            colsImg1[3].setAttribute('src', 'img/slots/'+ win1Col1[3])

            colsImg2[32].setAttribute('src', 'img/slots/'+ win1Col2[3])
            colsImg2[31].setAttribute('src', 'img/slots/'+ win1Col2[2])
            colsImg2[30].setAttribute('src', 'img/slots/'+ win1Col2[1])
            colsImg2[29].setAttribute('src', 'img/slots/'+ win1Col2[0])
            colsImg2[0].setAttribute('src', 'img/slots/'+ win1Col2[0])
            colsImg2[1].setAttribute('src', 'img/slots/'+ win1Col2[1])
            colsImg2[2].setAttribute('src', 'img/slots/'+ win1Col2[2])
            colsImg2[3].setAttribute('src', 'img/slots/'+ win1Col2[3])

            colsImg3[32].setAttribute('src', 'img/slots/'+ win1Col3[3])
            colsImg3[31].setAttribute('src', 'img/slots/'+ win1Col3[2])
            colsImg3[30].setAttribute('src', 'img/slots/'+ win1Col3[1])
            colsImg3[29].setAttribute('src', 'img/slots/'+ win1Col3[0])
            colsImg3[0].setAttribute('src', 'img/slots/'+ win1Col3[0])
            colsImg3[1].setAttribute('src', 'img/slots/'+ win1Col3[1])
            colsImg3[2].setAttribute('src', 'img/slots/'+ win1Col3[2])
            colsImg3[3].setAttribute('src', 'img/slots/'+ win1Col3[3])

            colsImg4[32].setAttribute('src', 'img/slots/'+ win1Col4[3])
            colsImg4[31].setAttribute('src', 'img/slots/'+ win1Col4[2])
            colsImg4[30].setAttribute('src', 'img/slots/'+ win1Col4[1])
            colsImg4[29].setAttribute('src', 'img/slots/'+ win1Col4[0])
            colsImg4[0].setAttribute('src', 'img/slots/'+ win1Col4[0])
            colsImg4[1].setAttribute('src', 'img/slots/'+ win1Col4[1])
            colsImg4[2].setAttribute('src', 'img/slots/'+ win1Col4[2])
            colsImg4[3].setAttribute('src', 'img/slots/'+ win1Col4[3])

            colsImg5[32].setAttribute('src', 'img/slots/'+ win1Col5[3])
            colsImg5[31].setAttribute('src', 'img/slots/'+ win1Col5[2])
            colsImg5[30].setAttribute('src', 'img/slots/'+ win1Col5[1])
            colsImg5[29].setAttribute('src', 'img/slots/'+ win1Col5[0])
            colsImg5[0].setAttribute('src', 'img/slots/'+ win1Col5[0])
            colsImg5[1].setAttribute('src', 'img/slots/'+ win1Col5[1])
            colsImg5[2].setAttribute('src', 'img/slots/'+ win1Col5[2])
            colsImg5[3].setAttribute('src', 'img/slots/'+ win1Col5[3])

        }, 1500);

    }

    if (tries === 1){
        window.setTimeout(function() {
            const cols = document.querySelectorAll('.col');
            tries++;

            colsImg1Two[32].setAttribute('src', 'img/slots/'+ win2Col1[3])
            colsImg1Two[31].setAttribute('src', 'img/slots/'+ win2Col1[2])
            colsImg1Two[30].setAttribute('src', 'img/slots/'+ win2Col1[1])
            colsImg1Two[29].setAttribute('src', 'img/slots/'+ win2Col1[0])
            colsImg1Two[0].setAttribute('src', 'img/slots/'+ win2Col1[0])
            colsImg1Two[1].setAttribute('src', 'img/slots/'+ win2Col1[1])
            colsImg1Two[2].setAttribute('src', 'img/slots/'+ win2Col1[2])
            colsImg1Two[3].setAttribute('src', 'img/slots/'+ win2Col1[3])

            colsImg2Two[32].setAttribute('src', 'img/slots/'+ win2Col2[3])
            colsImg2Two[31].setAttribute('src', 'img/slots/'+ win2Col2[2])
            colsImg2Two[30].setAttribute('src', 'img/slots/'+ win2Col2[1])
            colsImg2Two[29].setAttribute('src', 'img/slots/'+ win2Col2[0])
            colsImg2Two[0].setAttribute('src', 'img/slots/'+ win2Col2[0])
            colsImg2Two[1].setAttribute('src', 'img/slots/'+ win2Col2[1])
            colsImg2Two[2].setAttribute('src', 'img/slots/'+ win2Col2[2])
            colsImg2Two[3].setAttribute('src', 'img/slots/'+ win2Col2[3])

            colsImg3Two[32].setAttribute('src', 'img/slots/'+ win2Col3[3])
            colsImg3Two[31].setAttribute('src', 'img/slots/'+ win2Col3[2])
            colsImg3Two[30].setAttribute('src', 'img/slots/'+ win2Col3[1])
            colsImg3Two[29].setAttribute('src', 'img/slots/'+ win2Col3[0])
            colsImg3Two[0].setAttribute('src', 'img/slots/'+ win2Col3[0])
            colsImg3Two[1].setAttribute('src', 'img/slots/'+ win2Col3[1])
            colsImg3Two[2].setAttribute('src', 'img/slots/'+ win2Col3[2])
            colsImg3Two[3].setAttribute('src', 'img/slots/'+ win2Col3[3])

            colsImg4Two[32].setAttribute('src', 'img/slots/'+ win2Col4[3])
            colsImg4Two[31].setAttribute('src', 'img/slots/'+ win2Col4[2])
            colsImg4Two[30].setAttribute('src', 'img/slots/'+ win2Col4[1])
            colsImg4Two[29].setAttribute('src', 'img/slots/'+ win2Col4[0])
            colsImg4Two[0].setAttribute('src', 'img/slots/'+ win2Col4[0])
            colsImg4Two[1].setAttribute('src', 'img/slots/'+ win2Col4[1])
            colsImg4Two[2].setAttribute('src', 'img/slots/'+ win2Col4[2])
            colsImg4Two[3].setAttribute('src', 'img/slots/'+ win2Col4[3])

            colsImg5Two[32].setAttribute('src', 'img/slots/'+ win2Col5[3])
            colsImg5Two[31].setAttribute('src', 'img/slots/'+ win2Col5[2])
            colsImg5Two[30].setAttribute('src', 'img/slots/'+ win2Col5[1])
            colsImg5Two[29].setAttribute('src', 'img/slots/'+ win2Col5[0])
            colsImg5Two[0].setAttribute('src', 'img/slots/'+ win2Col5[0])
            colsImg5Two[1].setAttribute('src', 'img/slots/'+ win2Col5[1])
            colsImg5Two[2].setAttribute('src', 'img/slots/'+ win2Col5[2])
            colsImg5Two[3].setAttribute('src', 'img/slots/'+ win2Col5[3])

        }, 1500);

    }



    window.setTimeout(function() {
        slots.classList.toggle('spinning', false);
        if (tries === 1) {
            colsImg2[32].classList.add('_winAnim')
            colsImg2[31].classList.add('_winAnim')
            colsImg2[30].classList.add('_winAnim')
            colsImg2[29].classList.add('_winAnim')
            winOuter.classList.add('_winOne')
        }
        if (tries === 2) {
            colsImg4Two[32].classList.add('_winAnim')
            colsImg4Two[31].classList.add('_winAnim')
            colsImg4Two[30].classList.add('_winAnim')
            colsImg4Two[29].classList.add('_winAnim')
            winOuter.classList.add('_winTwo')
        }
    }, 3500);
}


let triesCounter = 0
let babbleTextAfterRotation = 'Маeш одну спробу, смертний'

playBtn.addEventListener('click', () => {
    if (triesCounter === 0) {
        runFirstRotation()
    } else {
        runSecondRotation()
    }
})

function runFirstRotation() {
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    spin()
    setTimeout(() => {
        doAfterFirstRotation()
    }, 6000)
    triesCounter++
}

function doAfterFirstRotation() {
    bubbleText.innerHTML  = babbleTextAfterRotation;
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
    setTimeout(() => {
        playBtn.classList.add('pulse-btn')
        playBtn.style.cursor = 'pointer'
    }, 1200)
}

function runSecondRotation() {
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    spin()
    setTimeout(() => {
        doAfterSecondRotation()
    }, 6000)
    triesCounter++
}

function doAfterSecondRotation() {
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'auto'
}


popupFirstBtn.addEventListener('click', () => {
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'
    winOuter.classList.remove('_winOne')
    colsImg2[32].classList.remove('_winAnim')
    colsImg2[31].classList.remove('_winAnim')
    colsImg2[30].classList.remove('_winAnim')
    colsImg2[29].classList.remove('_winAnim')
})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
}

cols.forEach(item => {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // код для мобильных устройств
        item.classList.add('_ios')
    } else {
        // код для обычных устройств
        item.classList.remove('_ios')
    }
});


(function () {
    var url = new URL(window.location.href);
    var params = ['l', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'param1', 'param2', 'param3', 'param4', 'creative_type', 'creative_id'];
    var linkParams = ['affid', 'cpaid']; // ищем в url redirectUrl в url:

    if (url.searchParams.has('redirectUrl')) {
        var redirectUrl = new URL(url.searchParams.get('redirectUrl'));

        if (redirectUrl.href.match(/\//g).length === 4 && redirectUrl.searchParams.get('l')) {
            //если ссылка в ссылка redirectUrl корректная
            localStorage.setItem('redirectUrl', redirectUrl.href); // указываем точкой входа домен с протоколом из redirectUrl
        }
    }

    params.forEach(function (param) {
        if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param));
    });

    linkParams.forEach(function (linkParam) {
        if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam));
    });

    window.addEventListener('click', function (e) {
        var link,
            parent = e.target.closest('a');

        if (parent.getAttribute('href') !== 'https://tds.favbet.partners') {
            return;
        }

        if (parent) {
            e.preventDefault();
            var affid = localStorage.getItem('affid');
            var cpaid = localStorage.getItem('cpaid');

            if (localStorage.getItem("redirectUrl")) {
                link = new URL(localStorage.getItem("redirectUrl"));
            } else {
                link = new URL(parent.href);
                if (affid && cpaid) {
                    link.pathname = '/' + affid + '/' + cpaid;
                }
            }

            params.forEach(function (param) {
                if (url.searchParams.has(param)) {
                    link.searchParams.set(param, localStorage.getItem(param));
                }
            });

            document.location.href = link;
        }
    });
})();

//test
document.querySelector('.secondRot-btn').addEventListener('click', () => {
    testToggleFunction();
});

let isTestActive = false;

function testToggleFunction() {
    if (isTestActive) {
        resetTestState();
    } else {
        doAfterSecondRotationTest();
    }
    isTestActive = !isTestActive;
}

function doAfterSecondRotationTest() {
    displayPopup(popupSecond);
    wrapper.style.pointerEvents = 'auto';
}

function resetTestState() {
    overlay.classList.add('opacity-overlay');
    popupSecond.classList.add('hide');
    wrapper.style.pointerEvents = '';
}


cols.forEach(item => {
    const ua = navigator.userAgent;
    const isFirefox = /Firefox/i.test(ua);

    if (isFirefox) {
        // Код для Mozilla Firefox
        item.classList.add('_firefox');
    } else {
        // Код для остальных браузеров
        item.classList.remove('_firefox');
    }
});
