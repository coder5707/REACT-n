import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import Video from "react-native-video";

const Welcome = () => {
  return (
    <ScrollView>
      <View style={{ padding: 40, marginTop: 50 }}>
        <Text style={{ padding: 40, marginLeft: 80, height: 100, color: "#bd0404" }}>
          KRATOS THE GOD OF WAR
        </Text>
        <Image source={require('./kratos2.webp')} style={{ width: '100%', height: 300, resizeMode: 'contain' }} />
        
        <Text style={styles.largeText}>Introduction:</Text>
        <Text style={styles.mediumText}>
          Absolutely! Here's an interesting and lesser-known story from Kratos’ life that blends mythology, emotion, and his signature rage — one that fans find particularly memorable:
        </Text>

        <Text style={styles.largeText}>⚔️ The Ghost of Sparta (Greek Saga):</Text>
        <Text>
           1. The Warrior's Pact
Born and raised in Sparta, Kratos was a fierce and ruthless warrior, rising quickly through the ranks to become a respected general. But in the face of a hopeless battle, he made a desperate plea to Ares, the Greek God of War:

"Give me the power to destroy my enemies!"

Ares granted his wish — binding the Blades of Chaos to Kratos’ arms, magical weapons forged in the depths of Hades. With these, Kratos slaughtered thousands... but in serving Ares, he lost his soul.
        </Text>
<Text></Text>
        <Text>
          2. The Fall of Olympus
Kratos embarked on a path of destruction, facing and killing the gods of Olympus one by one:

Poseidon, god of the sea.

Hades, ruler of the Underworld.

Helios, the sun god.

Even Zeus, his own father.

But each victory brought more chaos to the world. As gods fell, nature collapsed — the oceans roared, plagues spread, and the sky bled red.
        </Text>
      </View>

      <View style={styles.videoContainer}>
        <Text style={styles.largeText}>🎥 KRATOS</Text>
        <Video style={styles.Video}
          source={require('./kratos.mp4')}
         
          controls
          resizeMode="contain"
          paused={true}
        />

        <Text></Text>
        <Text style={styles.largeText}>❄️ A New Beginning (Norse Saga):</Text>
        <Text>🌲 1. A Quiet Life in the Wilds
After destroying Olympus and leaving the Greek world in ruin, Kratos vanished. He traveled far, eventually settling in the cold, ancient lands of Midgard — part of Norse mythology.
There, he sought peace and redemption. He lived in seclusion, hiding his true nature, and started a new life.

But fate would not let him rest.

</Text>
      </View>
    </ScrollView>
  );
};
const {  width } = Dimensions.get('window');

const styles = StyleSheet.create({
  largeText: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
  },
  mediumText: {
    fontSize: 18,
    marginVertical: 10,
  },
  videoContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Video: {
    width: '80%',
    height: 500,
    borderColor:'red',
    borderWidth:10,
    borderHeight:200 
    },
});

export default Welcome;
