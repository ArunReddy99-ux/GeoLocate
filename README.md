# useGeolocation React App
  This project is a simple React application that demonstrates how to use a custom React hook to access the user's geolocation (latitude and longitude) using the browser's Geolocation API. 
  It also tracks how many times the user has requested their position.
## Features
  -->Custom Hook (useGeolocation): Encapsulates all geolocation logic and state.  
  -->Error Handling: Displays clear error messages if geolocation is not supported or if the user denies permission.  
  -->Loading State: Shows a loading message while fetching the user's location.  
  -->Click Counter: Tracks and displays how many times the user has requested their position.  
  -->OpenStreetMap Link: Provides a clickable link to view the user's location on OpenStreetMap.    

## How It Works
### 1. Custom Hook: useGeolocation
  This hook manages all the logic for accessing the user's geolocation.  

#### State Variables:
  error: Stores any error messages (e.g., if geolocation is not supported or permission is denied).    
  isLoading: Boolean indicating if the app is currently fetching the user's position.    
  position: An object storing the user's latitude (lat) and longitude (lng).    
#### Function:
  getPosition():  
  Checks if geolocation is supported.   
  Sets loading state.  
  Calls navigator.geolocation.getCurrentPosition to fetch the user's location.   
  On success, updates the position state.  
  On error, updates the error state.   

#### Return Value:  
 Returns an object containing getPosition, error, isLoading, and position.  
### 2. Main Component: App
 This component uses the useGeolocation hook and manages the UI.  
#### State Variables:   
 countClicks: Tracks how many times the "Get my position" button has been clicked.  
#### Functions:  
 handleClicks():  
 Increments the click counter.  
 Calls getPosition() from the hook to fetch the user's location.  
#### UI Elements:
  Button: Triggers handleClicks. Disabled while loading.  
  Loading Message: Shown while fetching the position.  
  Error Message: Shown if there is an error.  
  Position Display: Shows the user's latitude and longitude as a clickable link to OpenStreetMap if available.  
  Click Counter: Shows how many times the user has requested their position.   
