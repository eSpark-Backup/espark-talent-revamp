import React from 'react';
import Image from 'next/image';

const StarRating = ({ stars }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <ul className="feedback-rating-ul">
      {ratings.map((rating, index) => (
        <li key={index}>
          <Image
            quality="85"
            proprity={true}
            src={
              rating <= stars
                ? '/images/homepage/our-clients/bright-star.svg'
                : '/images/homepage/our-clients/dark-star.svg'
            }
            alt="rating_img"
            height={20}
            width={20}
          />
        </li>
      ))}
    </ul>
  );
};

export default StarRating;
