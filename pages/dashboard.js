import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons
import Link from "next/link";
import Footer from "@/components/Footer";
const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4">
          <p className="text-lg">You are not authenticated. Please login.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">Dashboard</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-lg">Welcome, {session.user.email}!</p>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
            <Link href="/" className="text-white flex items-center hover:text-gray-300">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Profile
            </Link>
            <Link href="/api/auth/signout" className="text-white flex items-center hover:text-gray-300">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Sign out
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
