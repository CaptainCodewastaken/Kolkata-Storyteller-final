import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Story</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-lg leading-relaxed">
            Welcome to our platform! We are dedicated to showcasing the rich tapestry of human experiences from the vibrant city of Kolkata. Our mission is to provide a platform for individuals to share their stories, wisdom, and insights.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            At our core, we believe in the power of storytelling to foster empathy, understanding, and connection. Every story shared here is a testament to the resilience, creativity, and diversity of our community.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our platform is open to everyone, regardless of background or experience. Whether you're a seasoned writer, an aspiring storyteller, or simply someone with a tale to tell, we invite you to join us on this journey of discovery and expression.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Thank you for being a part of our story. Together, let's celebrate the voices, experiences, and narratives that make Kolkata truly unique.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
