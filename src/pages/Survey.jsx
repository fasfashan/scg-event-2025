import React, { useState } from "react";
import { survey } from "../data/survey";
import Layout from "../layout";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
const Survey = () => {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <Navigation />
      <div className="max-w-lg mx-auto mt-10">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 p-6 rounded border border-neutral-300"
          >
            <h2 className="text-xl mb-8 font-semibold text-center">
              Survei Acara
            </h2>

            {survey.map((q) => (
              <div key={q.id} className="mb-4">
                <p className="font-medium">{q.question}</p>
                {q.options.map((option) => (
                  <label key={option} className="block mt-1">
                    <input
                      required
                      type="radio"
                      name={`question-${q.id}`}
                      value={option}
                      onChange={() => handleChange(q.id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="bg-white/80 p-6 rounded border border-neutral-300 text-center">
            <div className="space-y-1 mb-8">
              <h2 className="text-lg font-semibold">
                Terimakasih atas masukan Anda
              </h2>
              <p cl>
                Kami akan menggunakannya untuk meningkatkan acara mendatang
              </p>
            </div>
            <Link
              to="/dashboard"
              className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Kembali ke home
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Survey;
