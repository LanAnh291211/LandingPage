import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name: password } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim() === '' ||
      password.length < 7
      
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const infor = {
      email,
      name: password,
    };

    let client;

    const connectionString = ``;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('infors').insertOne(infor);
      infor.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing failed!' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored !', message: infor });
  }
}

export default handler;
