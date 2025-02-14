import { nanoid } from 'nanoid';
import { client } from '../sanity.config.js';

async function migrateSalaries() {
  const documents = await client.fetch(
    `*[_type == "wiki"]{_id, _rev, salary, avgSalary}`
  );

  const transactions = documents.map((doc) => {
    const updatedSalaries = doc.avgSalary?.map((role) => ({
      _key: role._key || nanoid(), // Add a unique key if missing
      name: role.name,
      salary: {
        from: doc.salary,
        to: doc.salary + 1000,
      },
    }));

    return client.patch(doc._id).set({ avgSalary: updatedSalaries }).commit();
  });

  await Promise.all(transactions);
  console.log('Migration completed!');
}

migrateSalaries().catch((err) => console.error(err));
