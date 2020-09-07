import React from 'react';
export default function useScript(url) {
  try {
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
      const script = document.createElement('script');
      document.body.appendChild(script);
      script.onload = function() {
          setLoaded(true)
      }
      script.src = url;
      script.async = true;
      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
    return loaded;
  }
  catch(err) {
      console.error(`An error occurred while loading script using useScript hook. 
      Check if React is installed or the document object is globally available.
      useScript hook should only be run in the client browser, in case of SSR.
      `);
  }
}