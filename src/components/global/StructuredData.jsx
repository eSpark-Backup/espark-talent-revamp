export default function StructuredData({ data }) {
  return <script type="application/ld+json">{data}</script>;
}

// export default function StructuredData({ data }) {
//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify({
//           '@context': 'https://schema.org',
//           '@graph': [data],
//         }),
//       }}
//     />
//   );
// }
