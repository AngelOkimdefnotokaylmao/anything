let clickCount = 0; 
const maxClicks = 10;
let intervalId;
let isPaused = false;
let CurrentButtonCount = 0
const MaxbuttonCounter = 2

const coding = {
  'a': '*', 'b': '⌂', 'c': 'Œ', 'd': '&', 'e': 'τ',
  'f': '¨', 'g': '#', 'h': '╚', 'i': '•', 'j': '@',
  'k': '^', 'l': 'Σ', 'm': 'σ', 'n': 'ß', 'o': '‰',
  'p': '╠', 'q': '╤', 'r': '-', 's': ';', 't': ':',
  'u': '+', 'v': '¬', 'w': '§', 'x': '§', 'y': '¶',
  'z': '╛', ' ': ' '
};

function letraParaSimbolo(texto) {
  return texto.toLowerCase().split('').map(letra => coding[letra] || letra).join('');
}

function simboloParaLetra(simb) {
  const invertcode = Object.fromEntries(Object.entries(coding).map(([letra, simb]) => [simb, letra]));
  return simb.split('').map(s => invertcode[s] || s).join('');
}

const menuItem = document.querySelector('[data-testid="student-menu-item-profile"]');
if (menuItem) {
    const name = menuItem.querySelector('.MenuItem-styled__MenuHeader-sc-415292ab-2')?.textContent.trim();
    const imgSrc = menuItem.querySelector('img')?.src;

    const nomeCodificado = letraParaSimbolo(name);
    const nomeDecodificado = simboloParaLetra(nomeCodificado);

    console.log('Carregando script...');
    await new Promise(r => setTimeout(r, 750));
    console.log('Pegando chave...');
    await new Promise(r => setTimeout(r, 1000));
    
    const chaveCorreta = '#*⌂-•τΣ Œ‰;:* ╤+τ•-‰╛';
    if (nomeCodificado === chaveCorreta) {
        console.log('key=correct');
        console.log('BEM VINDO! chave esta correta.')
    } else {
        console.log('key=incorrect');
        await new Promise(r => setTimeout(r, 1000));
        location.reload();
    }
}
await new Promise(r => setTimeout(r, 1000));

const createNewButton = () => {
    CurrentButtonCount++
    const targetButton = document.querySelector('#show-solution') || document.querySelector('.general-sprite.midgame-1-solve');

    if (targetButton) {
      const newButton = document.createElement('a');
      newButton.id = 'show-solution';
      newButton.className = 'general-sprite midgame-1-solve';
      newButton.innerHTML = '//As';
      targetButton.parentNode.appendChild(newButton)
    }
}

const checkHotspotContent = () => {
  const hotspotContent = document.querySelector('.prodigi-hotspot-content');
  if(hotspotContent) {
    isPaused = true
  } else {
    isPaused = false
  }
}

const clickDuplicatedButton = () => {
  checkHotspotContent();

  if (!isPaused) {
      if (MaxbuttonCounter > CurrentButtonCount) {
        createNewButton();
      }
  }

  const duplicatedButton = Array.from(document.querySelectorAll('a.general-sprite.midgame-1-solve'))
    .find(button => button.textContent.trim() === '//As');

  if (duplicatedButton) {
    setTimeout(() => {
      duplicatedButton.click();
      setTimeout(() => {
        const correctAnswerButton = document.querySelector('.prodigi-item-answer.general-sprite.correct');
        if (correctAnswerButton) {
          correctAnswerButton.click();
        }
      }, 1);
    }, 1);
  }

  clickCount++;

  if (clickCount > maxClicks) {
    clearInterval(intervalId);
  }
}

intervalId = setInterval(clickDuplicatedButton, 900);

const End = () => {
  clearInterval(intervalId);
  console.log('End')
}

console.log("//  ▄███████▄  ███▄▄▄▄      ▄██████▄     ▄████████   ▄█");
console.log("//  ███    ███ ███▀▀▀██▄   ███    ███   ███    ███  ███");
console.log("//  ███    ███ ███   ███   ███    █▀    ███    █▀   ███");
console.log("//  ███    ███ ███   ███  ▄███         ▄███▄▄▄      ███");
console.log("//▀███████████ ███   ███ ▀▀███ ████▄  ▀▀███▀▀▀      ███");
console.log("//  ███    ███ ███   ███   ███    ███   ███    █▄   ███");
console.log("//  ███    ███ ███   ███   ███    ███   ███    ███  ███▌    ▄");
console.log("//  ███    █▀   ▀█   █▀    ████████▀    ██████████  █████▄▄██");
console.log("//                                                  ▀");
console.log("// █▄ ▄▄█████▄▄ ▄█   ▄████████▄ ████████▄     ▄████████");
console.log("// ███▀▀▀███▀▀▀███   ███    ███ ███   ▀███   ███    ███");
console.log("// ███   ███   ███   ███    ███ ███    ███   ███    █▀");
console.log("// ███   ███   ███   ███    ███ ███    ███  ▄███▄▄▄");
console.log("// ███   ███   ███ ▀███████████ ███    ███ ▀▀███▀▀▀");
console.log("// ███   ███   ███   ███    ███ ███    ███   ███    █▄");
console.log("// ███   ███   ███   ███    ███ ███   ▄███   ███    ███");
console.log("//  ▀█   ███   █▀    ███    █▀  ████████▀    ██████████");
console.log("//");
console.log("//      ███        ▄█    █▄     ▄█     ▄████████");
console.log("// ▀▀█████████▄   ███    ███   ███    ███    ███");
console.log("//     ▀███▀▀██   ███    ███   ███▌   ███    █▀");
console.log("//      ███   ▀  ▄███▄▄▄▄███▄▄ ███▌   ███");
console.log("//      ███     ▀▀███▀▀▀▀███▀  ███▌   ▀████████▄");
console.log("//      ███       ███    ███   ███           ███");
console.log("//      ███       ███    ███   ███     ▄█    ███");
console.log("//    ▄▄████▀     ███    █▀    █▀    ▄████████▀");
console.log('app esta atualmente em desenvolvimento.')
console.log('ANGEL MADE THIS, xx/08/2023 > 14/03/2025 (1°DS)')
