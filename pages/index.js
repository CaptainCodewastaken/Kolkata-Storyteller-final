// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stories from '../components/Stories';
import clientPromise from '../lib/mongodb';
import Carousel from '@/components/Carousel';

export default function Home({ stories }) {
  return (
    <div>
      <Navbar />
      <Carousel/>
      <Stories stories={stories} />
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
