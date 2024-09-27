import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';



const getTime=()=>{
    
}
const TimeZoneStatus = () => {
  const [indiaTime, setIndiaTime] = useState(getTime('Asia/Kolkata'));
  const [parisTime, setParisTime] = useState(getTime('Europe/Paris'));
  const [newYorkTime, setNewYorkTime] = useState(getTime('America/New_York'));
  const [londonTime, setLondonTime] = useState(getTime('Europe/London'));
  const [tokyoTime, setTokyoTime] = useState(getTime('Asia/Tokyo'));
  const [sydneyTime, setSydneyTime] = useState(getTime('Australia/Sydney'));


  // Weather states
  const [weatherData, setWeatherData] = useState({});



// Reusable component for each timebox

  return (
    <ImageBackground 
      source={{uri: 'https://images.unsplash.com/photo-1653903056453-a52d9a2df52b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
      style={styles.backgroundImage} 
      resizeMode="cover"
    >

      <View style={styles.overlay} /> {/* Overlay for blur effect */}
      <Text style={styles.heading}>Planet Pulse: Time & Weather</Text>
      <View style={styles.container} testID='timeBoxContainer'>
        
      </View>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black overlay for blur effect
  },
  heading: {
    fontSize: 38,
    top:10,
    fontWeight: 'bold',
    color: '#F5C542',
    fontFamily:'Brush Script MT',
    textAlign:'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  container: {
    flex: 1,
  },
  timebox: {
    width: 180,
    height: 180,
    borderRadius: 90, // Circular shape
    backgroundColor: 'rgba(37, 118, 142,0.2)', // Semi-transparent white
    borderWidth: 5,
    borderColor: '#f5c542', // Golden color border
    position: 'absolute',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // For Android shadow
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    color: '#eee',
  },
  weather: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 5,
  },
  // Custom positions for each clock with adjusted spacing to avoid overlap
  clock1: { top: 30, left: 220 }, // Glossy yellow
  clock2: { top: 250, left: 420}, // Glossy blue
  clock3: { top: 100, right: 280}, // Glossy purple
  clock4: { bottom: 180, left: 30}, // Glossy green
  clock5: { bottom: 50, right: 350 }, // Glossy red
  clock6: { bottom: 300, right: 30}, // Glossy orange
});

export default TimeZoneStatus;
