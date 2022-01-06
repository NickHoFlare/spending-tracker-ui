import React, { useEffect, useState } from 'react';
import './about.scss';

const About = () => {
  const [testValue, setTestValue] = useState<string|null>(null);
  
  useEffect(() => {
    const getFirestoreTest = async () => {
      const url = 'http://localhost:8000';
      const options: RequestInit = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };

      // Interesting: an iframe is added by the hot loader to inject code in the DOM
      // It is appended and removed immediately after the injection. 
      // If an error occurs while this is happening, the hot loader breaks, not removing the iframe.
      try {
        const response = await fetch(url, options);
        const firestoreTest = await response.json();
        setTestValue(firestoreTest.value);
      } catch(err) {
        setTestValue('API not responding');
      }
    };

    getFirestoreTest();
  }, []);

  return (
    <>
        <p>This is the ABOUT page</p>
        <p>Result from Firestore: { testValue }</p>
    </>
  );
};

export default About;
