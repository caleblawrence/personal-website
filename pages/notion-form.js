import { useState } from 'react';
import Container from '../components/Container';

export default function NotionForm() {
  const [title, setTitle] = useState('');
  const handleSubmit = () => {
    if (title.trim() == '') return;
    fetch('/api/create-new-notion-page', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title })
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setTitle('');
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <Container
      title="Notion Form – Caleb Lawrence"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Notion Form
        </h1>
        <p style={{ color: 'white' }}>
          This is a for fun page I made that adds to a notion database when you
          fill out form and click submit.
        </p>
        <div className="relative w-full mb-4 mt-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <button
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </Container>
  );
}
