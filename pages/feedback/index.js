import { buildFeedbackPath, extractFeedback } from './../api/feedback';

function FeedbackPage(props) {
  return (
    <ul>
      {props.feedbackItems.map((feedback) => {
        return <li key={feedback.id}>{feedback.text}</li>;
      })}
    </ul>
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
