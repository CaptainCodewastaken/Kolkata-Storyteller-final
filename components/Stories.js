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
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Latest Stories</h2>
        <div className="space-y-6">
          {stories.map((story) => (
            <div key={story._id} className="relative">
              {/* Radial Gradient Background */}
              <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-gray-800 to-black rounded-lg"></div>
              {/* Card Content */}
              <div className="p-4 border rounded-lg shadow-lg bg-gray-800 relative z-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white text-center mb-2">{story.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{story.summary}</p>
                </div>
                <p className="text-gray-300 text-justify">{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
