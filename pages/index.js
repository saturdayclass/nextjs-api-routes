import { useRef } from 'react';
function HomePage() {
  
  const emailInput = useRef();
  const feedbackInput = useRef();

  const submitForm =  (event) => {
    event.preventDefault();

    const enteredEmail  = emailInput.current.value;
    const enteredFeedback  = feedbackInput.current.value;
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label for="email">Email Address</label>
          <input type="email" ref={emailInput} id="email" />
        </div>
        <div>
          <label for="feedback">Your Feedback</label>
          <textarea type="text" ref={feedbackInput} id="feedback" rows="5" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
