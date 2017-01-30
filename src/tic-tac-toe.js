class TicTacToe {
    constructor() {
        this.matrix = [[null,null,null],[null,null,null],[null,null,null]];
        this.swich = true;
        this.length = 0;
        this.player1 = "x";
        this.player2 = "o";
    }

    getCurrentPlayerSymbol() {
        if(this.swich) return this.player1;
        else return this.player2;
    }

    nextTurn(rowIndex, columnIndex) {

        if(this.matrix[rowIndex][columnIndex] == null){
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.swich = !this.swich;
            this.length++;
        }
    }

    isFinished() {

        return (this.getWinner() != null || this.isDraw());        
    }

    getWinner() {

        if (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][0] === this.matrix[0][2] && this.matrix[0][0] != null) return this.matrix[0][0];
        if (this.matrix[0][0] === this.matrix[1][0] && this.matrix[0][0] === this.matrix[2][0] && this.matrix[0][0] != null) return this.matrix[0][0];
        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2] && this.matrix[0][0] != null) return this.matrix[0][0];
        if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0] && this.matrix[0][2] != null) return this.matrix[0][2];
        if (this.matrix[0][2] === this.matrix[1][2] && this.matrix[0][2] === this.matrix[2][2] && this.matrix[0][2] != null) return this.matrix[0][2];
        if (this.matrix[0][1] === this.matrix[1][1] && this.matrix[0][1] === this.matrix[2][1] && this.matrix[0][1] != null) return this.matrix[0][1];
        if (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][0] === this.matrix[1][2] && this.matrix[1][0] != null) return this.matrix[1][0];
        if (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][0] === this.matrix[2][2] && this.matrix[2][0] != null) return this.matrix[2][0];
                
        return null;
    }

    noMoreTurns() {

         return this.length == 9;
    }

    isDraw() {

        return (this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {

        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
