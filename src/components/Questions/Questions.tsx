import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionCard, { Question } from '../QuestionCard/QuestionCard';

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://localhost:3000/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      {questions.map((question) => (
        <QuestionCard key={question.user_id} question={question} />
      ))}
    </div>
  );
};

export default Questions;
