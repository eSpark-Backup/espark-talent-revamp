import { client } from '../sanity.config.js';

async function migrateAvgSalary() {
  const query = `*[_type == "wiki"]{_id, avgSalary}`;
  const documents = await client.fetch(query);

  for (const doc of documents) {
    console.log('here');
    const updatedAvgSalary = doc.avgSalary.map((entry) => {
      if (entry.name === 'mid') {
        return { ...entry, name: 'intermediate' };
      }
      return entry;
    });

    console.log(updatedAvgSalary, 'updatedAvgSalary');

    await client.patch(doc._id).set({ avgSalary: updatedAvgSalary }).commit();
    console.log(`Updated document: ${doc._id}`);
  }

  console.log('Migration completed.');
}

migrateAvgSalary().catch((err) => console.error('Migration failed:', err));
