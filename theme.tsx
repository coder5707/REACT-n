import React, { useContext, useState, createContext } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

// Create context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedText() {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.textContainer}>
      <Text style={{ color: theme === 'dark' ? 'white' : 'black', fontSize: 18 }}>
        This is {theme} theme
      </Text>
    </View>
  );
}

function ThemeToggleButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return <Button title="Toggle Theme" onPress={toggleTheme} />;
}

function ThemedContainer({ children }) {
  const { theme } = useContext(ThemeContext);
  const backgroundColor = theme === 'dark' ? '#222' : '#fff';
  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={barStyle} />
      {children}
    </View>
  );
}

// Main App component
export default function App() {
  return (
    <ThemeProvider>
      <ThemedContainer>
        <ThemedText />
        <ThemeToggleButton />
      </ThemedContainer>
    </ThemeProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    padding: 20,
  },
});
