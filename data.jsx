import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import FlipCard from 'react-native-flip-card'; 
import img from "./pro.jpg";
import img2 from "./logo5.jpg";

const StudentInfo = () => {
  const [users, setUsers] = useState(null);
  const [userId, setUserId] = useState(''); 

  const fetchUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
         if (!response.ok) throw new Error("User not found");
         return response.json();
       })
       .then((json) => {
         setUsers(json);
       })
       .catch((error) => {
         console.error(error);
         setUsers(null);
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Enter User ID (1-10)"value={userId}onChangeText={setUserId}keyboardType="numeric"style={styles.input}/>
      <Button title="Load User" onPress={() => fetchUser(userId)} />

      {users ? (
        <View style={styles.bor}>
          <View style={{ backgroundColor: 'blue' }}>
            <Image style={styles.img2} source={img2} />
          </View>
          <View style={styles.title}>
            <Text style={styles.collegeName}>
              GOBI ARTS & SCIENCE COLLEGE
            </Text>
          </View>
          <FlipCard
            style={styles.flipCard}
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            clickable={true}
          >
            <View style={styles.front}>
              <Image style={styles.img} source={img} />
              <Text style={styles.info}>Name: {users.name}</Text>
              <Text style={styles.info}>Username: {users.username}</Text>
              <Text style={styles.info}>Email: {users.email}</Text>
              <Text style={styles.info}>Id: {users.id}</Text>
              <Text style={styles.info}>Phone: {users.phone}</Text>
            </View>
            <View style={styles.back}>
              <Text style={styles.info}>Additional Information:</Text>
              <Text></Text>
              <Text>Address: 240 Mercer St, New York, NY 10012, USA</Text>
              <Text></Text>
              <Text>D.O.B: 1/1/2001</Text>
              <Text></Text>

            </View>
          </FlipCard>
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Enter a valid User ID to load data</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 90,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  bor: {
    marginTop: 20,
    borderWidth: 12,
    height: 580,
    borderColor: 'blue',
  },
  img: {
    marginLeft: 70,
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  img2: {
    borderRadius: 500,
    width: 90,
    height: 80,
    marginTop: 0,
    marginLeft: 150,
    backgroundColor: 'blue',
  },
  title: {
    backgroundColor: "blue",
  },
  collegeName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginBottom: 50,
    marginLeft: 70,
    paddingTop: 20,
  },
  front: {
    marginRight: 20,
  },
  back: {
    fontWeight: 'bold',
    marginRight: 150,
  },
  flipCard: {
    width: 370,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  info: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },
});

export default StudentInfo;
