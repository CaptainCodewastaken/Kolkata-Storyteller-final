import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded p-3 bg-gray-800 text-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border rounded p-3 bg-gray-800 text-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors w-full"
          >
            Login
          </button>
          <div className="flex justify-center">
            <button className="text-blue-500 font-medium mt-4 focus:outline-none hover:underline">Login with Google</button>
          </div>
          <div className="flex justify-center">
            <button className="text-gray-400 font-medium mt-2 focus:outline-none hover:underline">Login with Apple</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
