import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout";

const QuizResult = ({ score, totalQuestions, answers }) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/dashboard");
  };

  // Hitung total poin dari answers (sebagai backup)
  const calculatedPoints = answers.reduce(
    (sum, answer) => sum + (answer.pointsEarned || 0),
    0
  );

  return (
    <Layout>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-center">Hasil Kuis</h2>
        <p className="text-gray-500 text-center">
          Uji pengetahuan Anda dan dapatkan point!
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-md text-center">
          <p className="text-lg font-semibold">
            {score} dari {totalQuestions} pertanyaan benar
          </p>
          <p className="text-gray-700">
            Total Poin:{" "}
            <span className="font-bold">{calculatedPoints} point</span>
          </p>
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
              <p className="text-sm text-gray-500">
                Waktu jawab: {answer.timeUsed || "N/A"} detik
              </p>
              <p
                className={`${
                  answer.correct ? "text-green-600" : "text-red-600"
                }`}
              >
                Jawaban kamu: {answer.userAnswer}
              </p>
              {answer.correct ? (
                <p className="text-green-700">
                  ✅ Benar! (+{answer.pointsEarned || 0} poin)
                </p>
              ) : (
                <>
                  <p className="text-red-700">❌ Salah (0 poin)</p>
                  <p className="text-gray-600">
                    Jawaban benar: {answer.correctAnswer}
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
          Kembali ke home
        </button>
      </div>
    </Layout>
  );
};

export default QuizResult;
