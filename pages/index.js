import { useEffect, useRef, useState } from 'react';
function HomePage() {
  const emailInput = useRef();
  const feedbackInput = useRef();
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isSendFeedback, setIsSendFeedback] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedbackInput.current.value;

    const dataForm = {
      email: enteredEmail,
      text: enteredFeedback,
    };

    const req = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(dataForm),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await req.json();
    setIsSendFeedback(Math.random());
  };

  const loadFeedback = async () => {
    const req = await fetch('/api/feedback');
    const res = await req.json();
    setFeedbackItems(res.feedback);
  };

  useEffect(() => {
    loadFeedback();
  }, [isSendFeedback]);

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" ref={emailInput} id="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea type="text" ref={feedbackInput} id="feedback" rows="5" />
        </div>
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {feedbackItems.map((feedback) => {
          return (
            <>
              <li key={feedback.id}>{feedback.email}</li>
              <li key={feedback.id}>{feedback.text}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
