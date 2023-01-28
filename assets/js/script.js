const entrada = document.querySelector('#entrada-texto');

const bloco = document.querySelector('#saida-bloco');

const saida = document.querySelector('#saida-texto');

const btnEncriptar = document.querySelector('#converter');

const btnDescriptar = document.querySelector('#reverter');

const btnCopiar = document.querySelector('#copiar');

const btnLimpar1 = document.querySelector('#limpar1');

const btnLimpar2 = document.querySelector('#limpar2');

const rootElement = document.documentElement;

const btnTema = document.getElementById('trocar-tema');

const nav = document.querySelector('.nav');

const temaClaro = {
    '--font-type': '"Mulish", sans serif',
    '--body-bg': '#f5f5f5',
    '--body-bg-img-size': '0',
    '--header-bg-color': '#f5f5f5',
    '--letter-space-h1': '0.3rem',
    '--title-heading': '#000',
    '--logo-color': '#fa9021',
    '--section-encrypt': '#fff',
    '--section-decrypt': '#fff',
    '--block-color': '#fff',
    '--block-svg-fill': '#000',
    '--block-text-color': '#000',
    '--letter-space-main': '0.06rem',
    '--text-color-main': '#000',
    '--border-sections': '0.1rem solid #b1b1b170',
    '--shadow-sections': 'none',
    '--section-border-radius': '0.5rem',
    '--button-color': '#fa9021',
    '--button-text-color': '#000',
    '--shadow-buttons': '#0000003d 0rem 0.188rem 0.5rem',
    '--last-btn-bg-color': '#fa9021',
    '--last-btn-text-color': '#000',
    '--last-btn-blue-border': 'none',
    '--last-btn-red-border': 'none',
    '--button-border-radius': '5rem',
    '--svg-color-help': '#000',
    '--footer-bg-color': '#ededed',
    '--fill-svg-one': '#000',
    '--fill-svg-oracle-alura': '#000',
    '--title-footer': '#000',
    '--fill-svg-github': '#000',
    '--fill-svg-linkedin': '#000',
};

const temaDark = {
    '--font-type': '"Mulish", sans serif',
    '--body-bg': '#121212',
    '--body-bg-img-size': '0',
    '--header-bg-color': '#121212',
    '--letter-space-h1': '0.3rem',
    '--title-heading': '#fff',
    '--logo-color': '#fa9021',
    '--section-encrypt': '#202020',
    '--section-decrypt': '#202020',
    '--block-color': '#202020',
    '--block-svg-fill': '#fff',
    '--block-text-color': '#fff',
    '--letter-space-main': '0.06rem',
    '--text-color-main': '#fff',
    '--border-sections': '0.1rem solid #ffffff1c',
    '--shadow-sections': 'none',
    '--section-border-radius': '0.5rem',
    '--button-color': '#fa9021',
    '--button-text-color': '#fff',
    '--shadow-buttons': '#0000003d 0rem 0.188rem 0.5rem',
    '--last-btn-bg-color': '#fa9021',
    '--last-btn-text-color': '#fff',
    '--last-btn-blue-border': 'none',
    '--last-btn-red-border': 'none',
    '--button-border-radius': '5rem',
    '--svg-color-help': '#fff',
    '--footer-bg-color': '#101010',
    '--fill-svg-one': '#fff',
    '--fill-svg-oracle-alura': '#fff',
    '--title-footer': '#fff',
    '--fill-svg-github': '#fff',
    '--fill-svg-linkedin': '#fff',
};

const temaOracle = {
    '--font-type': '"Georgia","Times","Garamond",serif',
    '--body-bg': '#fbf9f8',
    '--body-bg-img-size': '0',
    '--header-bg-color': '#3a3632',
    '--letter-space-h1': '0.3rem',
    '--title-heading': '#c74634',
    '--logo-color': '#fbf9f8cc',
    '--section-encrypt': '#fff',
    '--section-decrypt': '#fff',
    '--block-color': '#fff',
    '--block-svg-fill': '#312d2a',
    '--block-text-color': '#312d2a',
    '--letter-space-main': '0.06rem',
    '--text-color-main': '#312d2a',
    '--border-sections': 'none',
    '--shadow-sections': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    '--section-border-radius': 'none',
    '--button-color': '#312d2a',
    '--button-text-color': '#fbf9f8',
    '--shadow-buttons': '#0000003d 0rem 0.188rem 0.5rem',
    '--last-btn-bg-color': '#312d2a',
    '--last-btn-text-color': '#fbf9f8',
    '--last-btn-blue-border': 'none',
    '--last-btn-red-border': 'none',
    '--button-border-radius': '0.4rem',
    '--svg-color-help': '#312d2a',
    '--footer-bg-color': '#312d2a',
    '--fill-svg-one': '#fbf9f8',
    '--fill-svg-oracle-alura': '#fbf9f8',
    '--title-footer': '#fbf9f8',
    '--fill-svg-github': '#fbf9f8',
    '--fill-svg-linkedin': '#fbf9f8',
};

const temaAlura = {
    '--font-type': "'Inter', sans serif",
    '--body-bg': '#051933 url(../img/bgblue.png) no-repeat',
    '--body-bg-img-size': 'cover',
    '--header-bg-color': 'transparent',
    '--letter-space-h1': '0.3rem',
    '--title-heading': '#fff',
    '--logo-color': '#a3ffbf',
    '--section-encrypt': '#051d3b',
    '--section-decrypt': '#051d3b',
    '--block-color': '#051d3b',
    '--block-svg-fill': '#6bd1ff',
    '--block-text-color': '#6bd1ff',
    '--letter-space-main': '0.06rem',
    '--text-color-main': '#fff',
    '--border-sections': '0.031rem solid #0d4d9c',
    '--shadow-sections': 'none',
    '--section-border-radius': '0.5rem',
    '--button-color': '#a3ffbf',
    '--button-text-color': '#051d3b',
    '--shadow-buttons': 'none',
    '--last-btn-bg-color': '#transparent',
    '--last-btn-text-color': '#fff',
    '--last-btn-blue-border': '0.094rem solid #325baa',
    '--last-btn-red-border': '0.094rem solid #db4a39',
    '--button-border-radius': '1.8rem',
    '--svg-color-help': '#fff',
    '--footer-bg-color': '#031326',
    '--fill-svg-one': '#fff',
    '--fill-svg-oracle-alura': '#fff',
    '--title-footer': '#fff',
    '--fill-svg-github': '#fff',
    '--fill-svg-linkedin': '#fff',
};

document.getElementById('tema-claro').addEventListener('change', () => {
    mudarTema(temaClaro)
});

document.getElementById('tema-dark').addEventListener('change', () => {
    mudarTema(temaDark)
});

document.getElementById('tema-oracle').addEventListener('change', () => {
    mudarTema(temaOracle)
});

document.getElementById('tema-alura').addEventListener('change', () => {
    mudarTema(temaAlura)
});

function mudarTema(tema) {
    for (let prop in tema) {
        mudarPropriedade(prop, tema[prop])
    }
};

function mudarPropriedade(property, value) {
    rootElement.style.setProperty(property, value)
};

btnEncriptar.addEventListener('click', () => {
    var texto = entrada.value;
    if (/[A-Z\u00C0-\u00FF]+/g.test(texto)) {
        alert('Utilize somente letras minúsculas e sem acentuações!')
    } else {
        texto = texto
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll('o', 'ober')
            .replaceAll('u', 'ufat');

        saida.value = texto;
        bloco.style.display = 'none';
    }
});

btnDescriptar.addEventListener('click', () => {
    var codigo = saida.value;
    if (/[A-Z\u00C0-\u00FF]+/g.test(codigo)) {
        alert('Utilize somente letras minúsculas e sem acentuações!')
    } else {
        codigo = codigo
            .replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ai', 'a')
            .replaceAll('ober', 'o')
            .replaceAll('ufat', 'u');

        saida.value = codigo;
    }
});

btnCopiar.addEventListener('click', () => {
    saida.select();
    saida.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Texto copiado!');
});

btnLimpar1.addEventListener('click', () => {
    entrada.value = '';
});

btnLimpar2.addEventListener('click', () => {
    saida.value = '';
});

bloco.addEventListener('click', () => {
    bloco.style.display = 'none';
});

btnTema.addEventListener('click', () => {
    if (nav.style.display == 'block') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'block'
    }
});