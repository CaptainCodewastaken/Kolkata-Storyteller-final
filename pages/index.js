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
    <div>
      <Navbar />
      <Carousel />
      {session ? (
        <Stories stories={stories} />
      ) : (
        <div className="container mx-auto mt-4 text-center">
          <p className="text-lg text-black-700">Login to view the latest stories.</p>
        </div>
      )}
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
