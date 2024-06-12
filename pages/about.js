import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-lg leading-relaxed">Welcome to our platform! We are a community-driven website dedicated to sharing real-life stories from the vibrant city of Kolkata. Our mission is to provide a platform for the people of Kolkata to share their unique experiences, insights, and perspectives.</p>
          <p className="text-lg leading-relaxed mt-4">At our core, we believe that everyone has a story worth sharing. Whether it's tales of triumph, moments of inspiration, or reflections on life's challenges, we strive to amplify the voices of Kolkata's residents and celebrate the diversity of our community.</p>
          <p className="text-lg leading-relaxed mt-4"> Our platform allows individuals to submit their stories anonymously or with attribution, providing a safe and inclusive space for expression. By sharing these stories, we aim to foster connection, empathy, and understanding among our readers.</p>
          <p className="text-lg leading-relaxed mt-4">Thank you for being a part of our journey. Together, let's continue to uplift and empower the voices of Kolkata!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
