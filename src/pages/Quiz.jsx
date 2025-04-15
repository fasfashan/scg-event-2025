import React from "react";
import { useParams } from "react-router-dom";
import { booth } from "../data/booth";
import { TimerReset } from "lucide-react";
import Timer from "../components/Timer";
import QuizResult from "../components/QuizResult";

const QuizPage = () => {
  const { id } = useParams();
  const boothId = Number(id);

  const boothData = booth.find((b) => b.id === boothId);
  const questions = boothData?.quiz || [];

  // Konstanta untuk pengaturan waktu dan poin
  const TOTAL_TIME = 20; // Total waktu untuk menjawab (detik)
  const GRACE_PERIOD = 5; // Periode awal tanpa pengurangan poin (detik)
  const MAX_POINTS = 150; // Poin maksimal jika menjawab dalam grace period
  const POINTS_AFTER_GRACE = 140; // Poin setelah grace period (detik ke-6)
  const POINTS_REDUCTION_PER_SECOND = 10; // Pengurangan poin per detik setelah grace period

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [timeLeft, setTimeLeft] = React.useState(TOTAL_TIME);
  const [score, setScore] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);

  const handleNextQuestion = (isTimeout = false) => {
    const isCorrect =
      !isTimeout && selectedAnswer === questions[currentQuestion]?.answer;

    // Perhitungan poin dengan sistem baru
    let pointsEarned = 0;
    const timeUsed = TOTAL_TIME - timeLeft;

    if (isCorrect) {
      if (timeUsed <= GRACE_PERIOD) {
        // Jika menjawab dalam waktu baca (5 detik pertama)
        pointsEarned = MAX_POINTS;
      } else {
        // Mulai detik ke-6, poin awal 140, kemudian berkurang 10 setiap detik
        const secondsAfterGracePeriod = timeUsed - GRACE_PERIOD;
        pointsEarned = Math.max(
          0,
          POINTS_AFTER_GRACE -
            (secondsAfterGracePeriod - 1) * POINTS_REDUCTION_PER_SECOND
        );
      }

      // Update score untuk menghitung jawaban benar
      setScore((prev) => prev + 1);
    }

    setAnswers((prev) => [
      ...prev,
      {
        question: questions[currentQuestion]?.question,
        userAnswer: isTimeout ? "No answer (timeout)" : selectedAnswer,
        correctAnswer: questions[currentQuestion]?.answer,
        correct: isCorrect,
        timeUsed: timeUsed,
        pointsEarned: pointsEarned,
      },
    ]);

    // Move to next question or show results
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(TOTAL_TIME);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion, showResult]);

  if (!boothData) {
    return (
      <div className="min-h-screen bg-[url(/bg-potrait.jpg)] bg-cover bg-center max-w-md m-auto p-4">
        <div className="bg-white p-6 rounded-lg border border-neutral-300 text-center">
          <h2 className="text-xl font-bold mb-2">Booth Tidak Ditemukan</h2>
          <p>Maaf, booth dengan ID {id} tidak ditemukan.</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    // Hitung total poin
    const totalPoints = answers.reduce(
      (sum, answer) => sum + answer.pointsEarned,
      0
    );

    // Hitung rata-rata waktu menjawab
    const averageTime =
      answers.reduce((sum, answer) => sum + answer.timeUsed, 0) /
      answers.length;

    return (
      <QuizResult
        score={score}
        totalQuestions={questions.length}
        points={totalPoints}
        answers={answers}
        averageTime={averageTime.toFixed(1)} // Rata-rata waktu dengan 1 angka dibelakang koma
      />
    );
  }

  // Visual indicator for grace period
  const isInGracePeriod = TOTAL_TIME - timeLeft <= GRACE_PERIOD;

  // Menghitung poin yang akan didapat jika menjawab benar sekarang
  const calculateCurrentPoints = () => {
    const timeUsed = TOTAL_TIME - timeLeft;

    if (timeUsed <= GRACE_PERIOD) {
      return MAX_POINTS;
    } else {
      const secondsAfterGracePeriod = timeUsed - GRACE_PERIOD;
      return Math.max(
        0,
        POINTS_AFTER_GRACE -
          (secondsAfterGracePeriod - 1) * POINTS_REDUCTION_PER_SECOND
      );
    }
  };

  return (
    <div className="min-h-screen bg-[url(/bg-potrait.jpg)] bg-cover bg-center max-w-md m-auto p-4">
      <div className="flex justify-between items-center">
        <img src="/logo.svg" alt="" />
        <Timer />
        <h1 className="px-2 py-1 w-fit bg-white text-black rounded-md border border-neutral-300">
          Booth {id}
        </h1>
      </div>

      <div className="bg-white/80 space-y-4  mt-10 rounded-lg border border-neutral-300 p-6">
        <div className="flex justify-between items-center">
          <p>
            Kuis {currentQuestion + 1}/{questions.length}
          </p>
          <div className="flex items-center gap-1">
            <TimerReset height={18} width={18} />
            <p
              className={`text-sm font-medium ${
                isInGracePeriod ? "text-green-600" : "text-orange-600"
              }`}
            >
              {timeLeft}s {isInGracePeriod && "(Waktu Baca: 150 poin)"}
              {!isInGracePeriod && ` (${calculateCurrentPoints()} poin)`}
            </p>
          </div>
        </div>
        <hr className="border-neutral-300" />
        <h2 className="text-lg font-semibold mb-4">
          {questions[currentQuestion]?.question}
        </h2>
        <div className="space-y-3">
          {questions[currentQuestion]?.options.map((option, index) => (
            <div
              key={index}
              className="flex items-center border border-neutral-300 rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                id={`option-${index}`}
                name="quiz-option"
                className="hidden" // Sembunyikan radio button asli
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
              />
              <label
                htmlFor={`option-${index}`}
                className="flex items-center w-full p-3 cursor-pointer"
              >
                <div
                  className={`h-4 w-4 rounded-full border flex items-center justify-center mr-3 ${
                    selectedAnswer === option
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-400"
                  }`}
                >
                  {selectedAnswer === option && (
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-gray-700">{option}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => handleNextQuestion(false)}
            disabled={selectedAnswer === null}
            className={`px-4 py-2 w-full rounded-md ${
              selectedAnswer === null
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {currentQuestion + 1 === questions.length
              ? "Selesai"
              : "Pertanyaan selanjutnya"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
