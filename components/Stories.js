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
    <div id="storyheading" className="bg-[#FFFFFF] text-black min-h-screen relative overflow-hidden">
      <div className="container mx-auto p-4 my-10">
        <div className="storyheading text-center">
          <p className="text-xl text-black">KOLKATA STORYTELLERS</p>
          <p className="text-5xl text-black font-semibold">LATEST STORIES</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6"> {/* One story per row */}
          {stories.map((story) => (
            <div key={story._id} className="relative rounded-lg shadow-lg bg-white overflow-hidden">
              {/* Image Section */}
              <div className="relative h-64 w-full">
                {story.ImageURL1 && (
                  <img src={story.ImageURL1} alt={story.title} className="absolute object-cover h-full w-full rounded-t-lg" />
                )}
                {story.ImageURL2 && (
                  <img
                    src={story.ImageURL2}
                    alt={story.title}
                    className="absolute inset-0 object-cover h-full w-full opacity-25 rounded-t-lg"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="p-4 text-black">
                <h3 className="text-xl font-semibold text-center mb-2">{story.title}</h3>
                <p className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: story.summary }} /> {/* Allow HTML for summaries */}
                <p className="text-justify hyphens-auto font-merriweather">{story.story}</p> {/* Use Merriweather font */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
