import React, { useEffect, useState } from 'react';
import './about.scss';

const About = () => {
  const [testValue, setTestValue] = useState();
  
  useEffect(() => {
    const getFirestoreTest = async () => {
      const url = 'http://localhost:8000';
      const options: RequestInit = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };
      const response = await fetch(url, options);
      const firestoreTest = await response.json();
      
      setTestValue(firestoreTest.value);
    };

    getFirestoreTest();
  });

  return (
    <>
        <p>This is the ABOUT page</p>
        <p>Result from Firestore: { testValue }</p>
    </>
  );
};

export default About;
