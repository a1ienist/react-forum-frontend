import React from 'react';

export interface Question {
   question_text: string;
   date: Date;
   user_id: string;
}

interface CardProps {
 question: Question;
}

const QuestionCard: React.FC<CardProps> = ({ question }) => {
 const formattedDate = new Intl.DateTimeFormat('en-US').format(question.date);

 return (
   <div className="card">
     <h2 className="card-title">{question.question_text}</h2>
     <p className="card-author">Asked by {question.user_id}</p>
     <p className="card-date">{formattedDate}</p>
   </div>
 );
}

export default QuestionCard;
