import React from 'react';

export const Input = ({ onEnter, onChange, value }) => {
  return (
    <textarea
      style={styles.container}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={(e) => (e.keyCode === 13 ? onEnter(e.target.value) : null)}
    />
  );
};

const styles = {
  container: {
    padding: 12,
  },
};
