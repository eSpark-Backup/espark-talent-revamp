// import React from 'react';



import CareerCards from '@/components/careers/CareerCards';
import Hero from '@/components/homepage/Hero';

import { JOBS_HERO_DATA } from '@/constants/global/hero-sections';
import { CAREERS_DATA } from '@/constants/careers';
import { getJob, getJobCategories } from '@/sanity/sanity.quries';

export default async function page() {
  const job = await getJob();
  const jobCategory = await getJobCategories();  
  return (
    <>
      <Hero data={JOBS_HERO_DATA} />
      <CareerCards data={job} categories={jobCategory}  />
    </>
  );
};



// import { getJob } from "@/sanity/sanity.quries";
// import Image from "next/image";
// export default async function Job() {
//    const job = await getJob();
// console.log(job);
//   return (
//     <section className="mt-32">
//       <div className="mb-16">
//         <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
//       </div>

//       <div className="flex flex-col gap-y-12">
//         {job.map((data) => (
//           <div
//             key={data._id}
//             className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
//           >
//             {data._id}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }