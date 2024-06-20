/* eslint-disable react/prop-types */
import Square from "./Square"
import CalculateWinner from './CalculateWInner';

// eslint-disable-next-line react/prop-types
function Board({ xIsNext, squares, onPlay }) {
    function handleSquareClick(i) {
        if (squares[i] || CalculateWinner(squares)) return;
        
        const nextSquares = squares.slice();
        
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares)
    }

    const winner = CalculateWinner(squares);
    let status = '';
    if (winner){
        status = 'The Winner is player :' + winner;
    } else {
        status = 'Next Player :' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className='status'>{status}</div>
            <div className="board">
                <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)}  />
                <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)}  />
                <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)}  />
                <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)}  />
                <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)}  />
                <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)}  />
                <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)}  />
                <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)}  />
            </div>
        </>
    )
}

export default Board;