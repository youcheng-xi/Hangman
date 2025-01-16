function WordDisplay({ word, guessedLetters, reveal}) {
    return (
        <div>
            {word.split('').map((letter, index) => (
                guessedLetters.includes(letter) || reveal ? letter : '_'
            )).join(' ')
            }
        </div>
    );
}

export default WordDisplay;