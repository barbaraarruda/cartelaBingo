function generateBingoCard() {
    const bingoCard = document.getElementById('bingoCard');
    const bingoMessage = document.getElementById('bingoMessage');
    bingoCard.innerHTML = ''; 
    bingoMessage.classList.remove('visible'); 
    bingoMessage.classList.add('hidden');

    const numbers = Array.from({ length: 90 }, (_, i) => i + 1);
    const shuffled = numbers.sort(() => Math.random() - 0.5).slice(0, 15); 

    shuffled.forEach((number) => {
        const cell = document.createElement('div');
        cell.textContent = number < 10 ? `0${number}` : number;
        cell.classList.add('bingo-cell');
        cell.addEventListener('click', () => {
            cell.classList.toggle('marked'); 
            checkBingo(); 
        });
        bingoCard.appendChild(cell);
    });
}

function clearBingoCard() {
    const cells = document.querySelectorAll('.bingo-cell.marked');
    cells.forEach((cell) => cell.classList.remove('marked')); 
}


function checkBingo() {
    const cells = document.querySelectorAll('.bingo-cell');
    const allMarked = Array.from(cells).every((cell) =>
        cell.classList.contains('marked')
    );

    if (allMarked) {
        const bingoMessage = document.getElementById('bingoMessage');
        bingoMessage.classList.remove('hidden');
        bingoMessage.classList.add('visible');

        
        setTimeout(() => {
            bingoMessage.classList.remove('visible');
            bingoMessage.classList.add('hidden');
        }, 3000);
    }
}


document.getElementById('generateButton').addEventListener('click', generateBingoCard);
document.getElementById('clearButton').addEventListener('click', clearBingoCard);


generateBingoCard();

