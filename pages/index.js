import { useRef } from 'react';
function HomePage() {
  const emailInput = useRef();
  const feedbackInput = useRef();

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
    console.log(res);
  };

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
    </div>
  );
}

export default HomePage;
