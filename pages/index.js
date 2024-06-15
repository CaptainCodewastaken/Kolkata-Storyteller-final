// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stories from '../components/Stories';
import clientPromise from '../lib/mongodb';
import Carousel from '@/components/Carousel';

export default function Home({ stories }) {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Stories stories={stories} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db();
  const stories = await db.collection('stories').find({}).sort({ _id: -1 }).toArray();
  return {
    props: {
      stories: JSON.parse(JSON.stringify(stories)),
    },
  };
}
