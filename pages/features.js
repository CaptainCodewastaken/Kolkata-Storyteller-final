import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Anonymous Submissions"
            description="Submit your stories anonymously without revealing your identity."
          />
          <FeatureCard
            title="User Profiles"
            description="Create a user profile to track your submissions and interact with other users."
          />
          <FeatureCard
            title="Community Interaction"
            description="Engage with other users by liking, commenting, and sharing their stories."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Features;
