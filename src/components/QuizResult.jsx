import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout";
import { CheckCircle, XCircle, Clock } from "lucide-react";

const QuizResult = ({
  score,
  totalQuestions,
  answers,
  points,
  averageTime,
}) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/dashboard/event-activity");
  };

  // Hitung total poin dari answers (sebagai backup)
  const calculatedPoints = answers.reduce(
    (sum, answer) => sum + (answer.pointsEarned || 0),
    0
  );

  // Gunakan points dari props jika ada, jika tidak gunakan calculatedPoints
  const displayPoints = points || calculatedPoints;

  return (
    <Layout>
      <div className="max-w-md mx-auto p-6 mt-10 bg-white/80 rounded-lg border border-neutral-300">
        <h2 className="text-lg font-semibold text-center">Hasil Kuis</h2>

        <div className="mt-4 p-4 bg-gray-100 rounded-md text-center">
          <p className="text-lg font-semibold">
            Score kamu: {score}/{totalQuestions}
          </p>
          <p className="text-gray-700">
            Selamat! Kamu mendapatkan{" "}
            <span className="font-bold">{displayPoints} </span> point
          </p>
          <div className="flex items-center justify-center mt-2 text-blue-600">
            <Clock height={16} className="mr-1" />
            <p className="text-sm">
              Rata-rata waktu menjawab:{" "}
              <span className="font-bold">{averageTime}</span> detik
            </p>
          </div>
        </div>

        <div className="mt-4">
          {answers.map((answer, index) => (
            <div
              key={index}
              className={`p-4 my-2 border rounded-md ${
                answer.correct
                  ? "border-green-500 bg-green-50"
                  : "border-red-500 bg-red-50"
              }`}
            >
              <p className="font-semibold">{answer.question}</p>
              <p className="text-sm mt-2 text-gray-500">
                Waktu jawab:{" "}
                <span className="font-semibold text-black">
                  {answer.timeUsed} detik
                </span>
              </p>
              <p className="text-neutral-500 text-sm">
                Jawaban kamu:{" "}
                <span className="font-semibold text-black">
                  {answer.userAnswer}
                </span>
              </p>
              {answer.correct ? (
                <>
                  <div className="flex gap-1 mt-2 items-center">
                    <CheckCircle className="text-green-700" height={16} />
                    <p className="text-green-700  text-sm">
                      Benar! (+
                      {answer.pointsEarned || 0} poin)
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-1 mt-2 items-center">
                    <XCircle height={16} className="text-red-700" />
                    <p className="text-red-700 text-sm">Salah (0 poin)</p>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Jawaban benar:{" "}
                    <span className="font-semibold text-black">
                      {answer.correctAnswer}
                    </span>
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleBackToHome}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Kembali ke Halaman Utama
        </button>
      </div>
    </Layout>
  );
};

export default QuizResult;
