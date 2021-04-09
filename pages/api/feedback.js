import fs from 'fs';
import path from 'path';

const handler = (req, res) => {
  if (req.method === 'POST') {
    const email = req.body.email;
    const text = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };

    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(200).json({
      message: 'Successfully added data!',
      feedback: newFeedback,
    });
  } else {
    res.status(200).json({
      message: "It's Work",
    });
  }
};

export default handler;
