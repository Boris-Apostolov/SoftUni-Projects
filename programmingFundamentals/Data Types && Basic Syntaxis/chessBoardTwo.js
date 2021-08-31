function chessBoard(n) {
    let result = '<div class="chessboard"> \n';
    let color = 'black';

    for (let i = 0; i < n; i++) {
        result += '  <div> \n';

        if (n % 2 === 0) {
            if (color === 'black') {
                color = 'white';
            } else {
                color = 'black';
            }
        }

        if (i === 0) {
            color = 'black';
        }

        for (let j = 0; j < n; j++) {
            result += `    <span class="${color}"></span> \n`;

            if (color === 'black') {
                color = 'white';
            } else {
                color = 'black';
            }
        }

        result += '  </div> \n';
    }
    result += '</div>';
    console.log(result);
}