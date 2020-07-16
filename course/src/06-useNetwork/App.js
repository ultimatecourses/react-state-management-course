import React, { useState } from 'react';
import { usePicture } from './usePicture';

export const App = () => {
  let [date, setDate] = useState('2020-05-05');
  let { picture, loading } = usePicture(date);

  if (loading) return <div>Loading!</div>;

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <h3>{picture.title}</h3>
      <div>{picture.explanation}</div>
      <img src={picture.url} alt={picture.title} />
    </div>
  );
};
