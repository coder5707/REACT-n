import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const NUM_HOLES = 6;

export default function Game() {
  const [molePosition, setMolePosition] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30); 

  
  useEffect(() => {
    const moleInterval = setInterval(() => {
      const randomPosition = Math.floor(Math.random() * NUM_HOLES);
      setMolePosition(randomPosition);
    }, 800);

    return () => clearInterval(moleInterval);
  }, []);

  
  useEffect(() => {
    if (timer === 0) return;
    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  const handleMoleTap = (index) => {
    if (index === molePosition) {
      setScore((prev) => prev + 1);
      setMolePosition(null); // Prevent double-tap
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🐹 Whack-a-Mole 🛠️</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.timer}>Time Left: {timer}s</Text>

      <View style={styles.grid}>
        {[...Array(NUM_HOLES)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.hole}
            onPress={() => handleMoleTap(index)}
          >
            {molePosition === index ? <Text style={styles.mole}>🐹</Text> : null}
          </TouchableOpacity>
        ))}
      </View>

      {timer === 0 && (
        <Text style={styles.gameOver}>🎮 Game Over! Final Score: {score}</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
  },
  score: {
    fontSize: 20,
    marginBottom: 5,
  },
  timer: {
    fontSize: 18,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'center',
  },
  hole: {
    width: 80,
    height: 80,
    margin: 10,
    backgroundColor: '#b3d9ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  mole: {
    fontSize: 30,
  },
  gameOver: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#cc0000',
  },
});
