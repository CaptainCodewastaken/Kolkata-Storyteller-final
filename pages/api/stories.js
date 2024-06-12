import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db('Kolkata-Storyteller');

  const stories = await db.collection('Blogs').find({}).toArray();

  res.json(stories);
};
