import AbtNavbar from '@/components/AbtNavbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <AbtNavbar />
      <div className="flex-grow container mx-auto p-4 md:px-8 lg:px-12">
        <h1 className="text-3xl md:text-3xl font-akzidenz mb-6 text-center">KOLKTA STORYTELLER</h1>
        <h1 className="text-9xl md:text-9xl font-gt-sectra mb-6 text-center">About</h1>
        <div className="abouttext bg-gray-100 rounded-lg shadow-lg p-6 md:p-8 lg:p-12 max-w-4xl mx-auto font-merriweather">
          <p className="text-lg leading-relaxed mb-6">
            Welcome to our platform!
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our mission is to provide a space for individuals to share their stories about Kolkata, famously known as the “City of Joy.” We are dedicated to presenting candid conversations in the form of stories—ones that are grounded, honest, heartfelt, and, most importantly, timeless—told by the people of this dynamic city. We want to engage with locals in order to portray the rich heritage of Kolkata as seen through the people’s eyes. Through these narratives, we aim to capture this city’s colossal past as a summation of its people’s experiences and memories.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Join and support us as we celebrate the spirit of Kolkata, one story at a time.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Share your stories at creators@kolkatastoryteller.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
