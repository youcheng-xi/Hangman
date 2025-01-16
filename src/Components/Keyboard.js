import '../Styles/Keyboard.css'

function Keyboard({onGuess, guessedLetters, disabled }) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return (
        <div className="keyboard">
            {letters.map((letter) => (
                <button
                    key={letter}
                    onClick={(() => onGuess(letter))}
                    disabled={guessedLetters.includes(letter) || disabled}
                >
                    {letter}
                </button>
            ))}
        </div>
    )
}

export default Keyboard;