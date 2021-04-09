import { useState } from 'react';
import { buildFeedbackPath, extractFeedback } from './../api/feedback/feedback';

function FeedbackPage(props) {
  const [feedbackData, setFeedback] = useState();
  const loadFeedbackHandler = async (id) => {
    const req = await fetch(`/api/feedback/${id}`);
    const res = await req.json();
    setFeedback(res.feedback);
  };
  return (
    <>
      {feedbackData && <p>Feedback Email : {feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((feedback) => {
          return (
            <>
              <li key={feedback.id}>{feedback.text}</li>
              <button onClick={loadFeedbackHandler.bind(null, feedback.id)}>
                Show Details
              </button>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default FeedbackPage;

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}
