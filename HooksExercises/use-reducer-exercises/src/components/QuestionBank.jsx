import React, { useReducer } from "react";
import { Button, Container, Card, Badge } from "react-bootstrap";

const initialState = {
    questions: [
        {
            id: 1,
            question: "What is the capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Perth"],
            answer: "Canberra",
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            id: 3,
            question: "What is the largest ocean on Earth?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean",
            ],
            answer: "Pacific Ocean",
        },
    ],
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    showScore: false,
    isAnswered: false,
    timeleft: 10,
    interval: null,
    start: false,
};

let timeRunning = false;

function reducer(state, action) {
    switch (action.type) {
        case 'start': {
            return { ...state, start: true };
        }

        case 'answerQuestion': {
            if (state.isAnswered) return state;
            const isCorrect = action.payload === state.questions[state.currentQuestion].answer;
            clearInterval(state.interval);
            timeRunning = false;
            return {
                ...state,
                selectedOption: action.payload,
                isAnswered: true,
                score: isCorrect ? state.score + 1 : state.score,
            };
        }

        case 'nextQuestion': {
            clearInterval(state.interval);
            timeRunning = false;
            const showScore = state.currentQuestion + 1 === state.questions.length;
            return {
                ...state,
                currentQuestion: showScore ? state.currentQuestion : state.currentQuestion + 1,
                selectedOption: "",
                isAnswered: false,
                showScore: showScore,
                timeleft: 10,
                interval: null,
            };
        }

        case 'tick': {
            if (state.timeleft <= 1) {
                clearInterval(state.interval);
                timeRunning = false;
                return {
                    ...state,
                    timeleft: 0,
                    isAnswered: true,
                    selectedOption: "",
                };
            }
            return { ...state, timeleft: state.timeleft - 1 };
        }

        case 'reset': {
            clearInterval(state.interval);
            timeRunning = false;
            return { ...initialState };
        }

        case 'setInterval': {
            return { ...state, interval: action.payload };
        }

        default:
            return state;
    }
}

const QuestionBank = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        questions,
        currentQuestion,
        selectedOption,
        score,
        showScore,
        isAnswered,
        timeleft,
        interval,
        start,
    } = state;

    const startTimer = () => {
        if (timeRunning) return;
        clearInterval(interval);
        timeRunning = true;
        const timer = setInterval(() => {
            dispatch({ type: 'tick' });
        }, 1000);
        dispatch({ type: 'setInterval', payload: timer });
    };
    const handleStart = () => {
        dispatch({ type: 'start' });
    };


    const handleAnswerSelect = (option) => {
        dispatch({ type: 'answerQuestion', payload: option });
    };

    const handleNextQuestion = () => {
        dispatch({ type: 'nextQuestion' });
        setTimeout(() => startTimer(), 200);
    };

    const handleReset = () => {
        dispatch({ type: 'reset' });
        setTimeout(() => startTimer(), 200);
    };

    if (start && !showScore && !isAnswered && !interval && !timeRunning) {
        startTimer();
    }

    const getVariantForOption = (option) => {
        const correctAnswer = questions[currentQuestion].answer;
        if (!isAnswered) return 'outline-primary';
        if (option === correctAnswer) return 'success';
        if (option === selectedOption && option !== correctAnswer) return 'danger';
        return 'outline-secondary';
    };

    return (
        <Container style={{ maxWidth: '80%', marginTop: '40px' }}>
            <Card className="p-4">
                {showScore ? (
                    <div className="text-center">
                        {(() => {
                            const stored = localStorage.getItem('highScore');
                            const highScore = stored ? parseInt(stored, 10) : 0;

                            if (score > highScore) {
                                localStorage.setItem('highScore', score);
                            }

                            return (
                                <h2>
                                    Your Score: {score} / {questions.length}
                                    <br />
                                    High Score: {Math.max(score, highScore)}
                                    {score > highScore && <div className="text-success mt-2">🏆 New High Score!</div>}
                                </h2>
                            );
                        })()}

                        <Button variant="primary" onClick={handleReset}>
                            Restart Quiz
                        </Button>
                    </div>
                ) : (
                    !start ? (
                        <div className="text-center">
                            <h5>Quiz Game</h5>
                            <Button variant="primary" onClick={handleStart}>
                                Start Quiz
                            </Button>
                        </div>
                    ) : null
                )}

                {!showScore && start && (

                    <div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Score: {score}</h5>
                            <Badge bg="info" pill>
                                Question {currentQuestion + 1} of {questions.length}
                            </Badge>
                            <Badge bg={timeleft <= 3 ? "danger" : "warning"} pill>
                                Time Left: {timeleft}s
                            </Badge>
                        </div>

                        <h4 className="text-center mb-4 font-weight-bold">
                            Question {questions[currentQuestion].id}:<br />
                            {questions[currentQuestion].question}
                        </h4>

                        <div className="d-flex flex-row justify-content-center align-items-center mt-5">
                            {questions[currentQuestion].options.map((option, index) => (
                                <Button
                                    key={index}
                                    variant={getVariantForOption(option)}
                                    className="m-2 px-3 py-2 flex-grow-1"
                                    onClick={() => handleAnswerSelect(option)}
                                    disabled={isAnswered}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>

                        {isAnswered && (
                            <div className="mt-3 text-center">
                                {timeleft === 0 ? (
                                    <p className="text-warning">⏰ Time’s up! The correct answer is: {questions[currentQuestion].answer}</p>
                                ) : selectedOption === questions[currentQuestion].answer ? (
                                    <p className="text-success">Correct!</p>
                                ) : (
                                    <p className="text-danger">
                                        Incorrect! The correct answer is: {questions[currentQuestion].answer}
                                    </p>
                                )}
                                <Button
                                    variant="primary"
                                    onClick={handleNextQuestion}
                                >
                                    {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </Card>
        </Container>
    );
};

export default QuestionBank;
