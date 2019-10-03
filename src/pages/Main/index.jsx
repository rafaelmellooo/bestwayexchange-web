import React, { useEffect } from 'react';
import M from 'materialize-css';
import './styles.css';

export default function Main() {
  useEffect(() => {
    // Auto initialize all the things!
    M.AutoInit();
  }, []);

  return (
    <h1>Main</h1>
  );
}
