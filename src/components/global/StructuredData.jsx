const StructuredData = ({ data }) => {
  return <script type="application/ld+json">{data}</script>;
};

export default StructuredData;
// export default const StructuredData({ data }) {
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
