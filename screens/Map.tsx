import * as React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
const unify_logo = require("../assets/Unify_logo.png");

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  tinyLogo: {
    width: 120,
    height: 70,
    position: "absolute",
    alignSelf: "center",
    top: 80,
    zIndex: 10,
  },
});

const markers = [
  {
    user_id: 1,
    coordinate: {
      latitude: 63.41927418855423,
      longitude: 10.402921136752736,
    },
    image:
      "https://econ2017.sites.olt.ubc.ca/files/2016/01/jpeg_bie_student_profile_Varun_Srivatsan.jpeg",
    icon: "fastfood",
    description: "spiser lunsj, bare å bli med!",
  },
  {
    user_id: 2,
    coordinate: {
      latitude: 63.41627418855423,
      longitude: 10.402921136752736,
    },
    image:
      "https://www.ecclesiologyandethnography.net/wp-content/uploads/2019/06/Koos-Tamminga.jpg",
    icon: "calculate",
    description: "Jobber med Matte 3",
  },
];

export default function Map() {
  return (
    <View>
      <Image style={styles.tinyLogo} source={unify_logo} />
      <MapView
        initialRegion={{
          latitude: 63.41927418855423,
          longitude: 10.402921136752736,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}
        style={styles.map}
      >
        {markers.map((marker) => {
          return (
            <Marker key={marker.user_id} coordinate={marker.coordinate}>
              <View>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{ uri: marker.image }}
                />
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}
