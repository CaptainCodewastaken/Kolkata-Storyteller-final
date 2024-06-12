import { useState, useEffect } from 'react';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch('/api/stories');
      const data = await response.json();
      setStories(data);
    };

    fetchStories();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <div key={story._id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{story.title}</h3>
            <p>{story.summary}</p>
            <p>{story.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
