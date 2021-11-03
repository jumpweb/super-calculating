import {useEffect, useRef, useState} from 'react'
import IntervalButton from './components/IntervalButton'
import Question from './components/Question'
import { generateQuestion } from '../../utils/questionUtils'
import GameBoard from "./components/GameBoard";

const GameState = {
    stopped: 'stopped',
    starting: 'starting',
    started: 'started',
    gameStarting: (gameState) => gameState === GameState.starting,
    gameStarted: (gameState) => gameState === GameState.started
}

const startupSteps = ['Start', '3', '2', '1', 'GO!']

function GamePage() {
    const [gameState, setGametState] = useState(GameState.stopped)
    const unmountRef = useRef(false)

    useEffect(() => {
        return () => {
            unmountRef.current = true
        }
    }, [])

    const renderCountDownButton = () => (
        <IntervalButton
            start={GameState.gameStarting(gameState)}
            text={startupSteps}
            onClick={startingGame}
            onCountDownCompleted={startGame}
        />
    )

    const startingGame = () =>  setGametState(GameState.starting)
    const startGame = () => {
        if (!unmountRef.current) {
            setGametState(GameState.started)
        }
    }

    const renderQuestion = () => {
        return <GameBoard />
    }

    const renderView = () => {
        switch (gameState) {
            case GameState.starting:
                return renderCountDownButton()
            case GameState.started:
                return renderQuestion()
            default:
                return renderCountDownButton()
        }
    }

    return renderView()
}

export default GamePage
