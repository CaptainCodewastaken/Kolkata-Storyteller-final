// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stories from '../components/Stories';
import clientPromise from '../lib/mongodb';
import Carousel from '@/components/Carousel';
import { useSession } from 'next-auth/react';

export default function Home({ stories }) {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Carousel />
        {session ? (
          <Stories stories={stories} />
        ) : (
          <div className="mt-4 text-center bg-[#111827] p-4 rounded-lg">
            <p className="text-lg text-white">Login to view the latest stories.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db();
  const stories = await db.collection('stories').find({}).toArray();
  return {
    props: {
      stories: JSON.parse(JSON.stringify(stories)),
    },
  };
}
