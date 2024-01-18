import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getSingleWiki } from "@/sanity/sanity.quries";
import InnerHero from "@/components/homepage/InnerHero";
import WikiSingle from "@/components/wiki/WikiSingle";
import { WIKI_HERO_DATA } from "@/constants/global/hero-sections";
import { data } from "autoprefixer";

const WikiPage = async ({ params }) => {
  const slug = params.wiki;
  const wiki = await getSingleWiki(slug);

  return (
    <>{ wiki.id}
     <InnerHero 
   data={WIKI_HERO_DATA}
    innerData={wiki}
     />
      <WikiSingle 
      data={wiki}
       />
    </>
  );
};

export default Page;