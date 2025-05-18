import { useState } from "react";

// Custom hook to handle geolocation logic
function useGeolocation() {
  const [error, setError] = useState(null); // Stores any error messages
  const [isLoading, setIsLoading] = useState(false); // Tracks loading state
  const [position, setPosition] = useState({}); // Stores latitude and longitude

  // Function to get the user's geolocation
  function getPosition() {
    if (!navigator.geolocation) {
      // If geolocation is not supported by the browser
      return setError("Your browser does not support geolocation");
    }

    setIsLoading(true); // Start loading
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // On success, update position state
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false); // Stop loading
      },
      (error) => {
        // On error, update error state
        setError(error.message);
        setIsLoading(false); // Stop loading
      }
    );
  }

  // Return the state and function to the component
  return { getPosition, error, isLoading, position };
}

export default function App() {
  const {
    error, // Error message from the hook
    isLoading, // Loading state from the hook
    position: { lat, lng }, // Destructure latitude and longitude
    getPosition, // Function to get geolocation
  } = useGeolocation();

  const [countClicks, setCountClicks] = useState(0); // Tracks the number of button clicks

  // Function to handle button clicks
  function handleClicks() {
    setCountClicks((count) => count + 1); // Increment click count
    getPosition(); // Call the geolocation function
  }

  return (
    <div>
      {/* Button to get the user's position */}
      <button onClick={handleClicks} disabled={isLoading}>
        Get my position
      </button>

      {/* Show loading message while fetching position */}
      {isLoading && <p>Loading position...</p>}

      {/* Show error message if there is an error */}
      {error && <p>{error}</p>}

      {/* Show the user's position if available */}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      {/* Show the number of times the button was clicked */}
      <p>You requested position {countClicks} times</p>
    </div>
  );
}
