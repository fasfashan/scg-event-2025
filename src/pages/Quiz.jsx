import React from "react";
import { useParams } from "react-router-dom";
import { booth } from "../data/booth";
import Navigation from "../components/Navigation";
import QuizResult from "../components/QuizResult";

const QuizPage = () => {
  const { id } = useParams();
  const boothId = Number(id);

  const boothData = booth.find((b) => b.id === boothId);
  const questions = boothData?.quiz || [];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [timeLeft, setTimeLeft] = React.useState(20);
  const [score, setScore] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);

  const handleNextQuestion = (isTimeout = false) => {
    const isCorrect =
      !isTimeout && selectedAnswer === questions[currentQuestion]?.answer;
    const timeBonus = isTimeout ? 0 : 20 - timeLeft;

    // Update score and answers
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswers((prev) => [
      ...prev,
      {
        question: questions[currentQuestion]?.question,
        userAnswer: isTimeout ? "No answer (timeout)" : selectedAnswer,
        correctAnswer: questions[currentQuestion]?.answer,
        correct: isCorrect,
        timeUsed: timeBonus,
        pointsEarned: isCorrect ? 20 - timeBonus : 0,
      },
    ]);

    // Move to next question or show results
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(20);
    } else {
      setShowResult(true);
    }
  };

  React.useEffect(() => {
    if (showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleNextQuestion(true); // Auto move to next question when time out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, showResult]);

  if (!boothData) {
    return (
      <div className="min-h-screen bg-[url(/bg-potrait.jpg)] bg-cover bg-center max-w-md m-auto p-4">
        {/* Error display remains same */}
      </div>
    );
  }

  if (showResult) {
    const totalPoints = answers.reduce(
      (sum, answer) => sum + answer.pointsEarned,
      0
    );
    return (
      <QuizResult
        score={score}
        totalQuestions={questions.length}
        points={totalPoints}
        answers={answers}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[url(/bg-potrait.jpg)] bg-cover bg-center max-w-md m-auto p-4">
      {/* Header remains same */}

      <div className="bg-white mt-4 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">
          {questions[currentQuestion]?.question}
        </h2>

        <div className="space-y-3">
          {questions[currentQuestion]?.options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`option-${index}`}
                name="quiz-option"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
              />
              <label
                htmlFor={`option-${index}`}
                className="ml-3 block text-gray-700"
              >
                {option}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-gray-500">Time Left: {timeLeft}s</p>
          <button
            onClick={() => handleNextQuestion(false)}
            disabled={selectedAnswer === null}
            className={`px-4 py-2 rounded-md ${
              selectedAnswer === null
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {currentQuestion + 1 === questions.length
              ? "Lihat Hasil"
              : "Pertanyaan selanjutnya"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
