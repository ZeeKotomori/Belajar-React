import { useState } from 'react'
import Board from "./Board"
import "../index.css"

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        
    }

    const moves = history.map((squares, move) => {
        let description = '';
        if (move > 0) {
            description = 'go to move : ' + move;
        } else {
            description = 'go to game start';
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    });

    return (
        <div className='Game'>
            <div className='Game-Board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="Game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

export default Game