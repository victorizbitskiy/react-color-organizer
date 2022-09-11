import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useColors } from '../hooks/color-hooks';
import StarRating from './StarRating';

const Color = ({ id, title, color, rating }) => {
  const { rateColor, removeColor } = useColors();

  let navigate = useNavigate();

  return (
    <section
      className="color"
      onClick={() => navigate(`/${id}`)}
    >
      <h1>{title}</h1>
      <button onClick={(e) => {
        removeColor(id);
        e.stopPropagation()
      }}>
      X
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={rating => rateColor(id, rating)}
      />
    </section>
  );
}

export default Color;