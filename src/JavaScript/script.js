function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "images/close_white_36dp.svg";
    }
}

const radio = document.querySelectorAll('.manual-btn');
let cont = 1

document.getElementById('radio01').checked = true

setInterval(() => {
    proximaImg()
}, 4000)

function proximaImg() {
    cont++;

    if (cont > 4) {
        cont = 1;
    }

    document.getElementById('radio0' + cont).checked = true
}

const searchInput = document.getElementById('search');
const container = document.getElementById('container');

searchInput.addEventListener('input', (event) => {

    const value = formatString(event.target.value);
    const itens = document.querySelectorAll('.itens .item');
    const noResults = document.getElementById('no_results');

    let hasResult = false;

    if (value != '') {
        container.style.display = 'none';
        itens.forEach(item => {
            if (formatString(item.textContent).indexOf(value) != -1) {
                item.style.display = 'flex';
                hasResult = true
                container.style.display = 'flex';

            } else {
                item.style.display = 'none';
                container.style.display = 'noen';
            }
        })

    } else {
        itens.forEach(item => item.style.display = 'none');
        noResults.style.display = 'none';
        container.style.display = 'none';


    }

});

function formatString(value) {
    return value
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
});



function sort() {
    var list, i, switching, shouldSwitch;
    list = document.getElementById("01");
    switching = true;
    while (switching) {
        switching = false;
        b = list.getElementsByClassName("li");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}
