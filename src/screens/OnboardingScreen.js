import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { boardingItems } from "../data/onboardings";
import Button from "../components/Button";
import { useLayoutEffect, useRef, useState } from "react";
import { GlobalStyles } from "../constants/styles";
const OnboardingScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonText, setButtonText] = useState("Next");

  const pageHandler = () => {
    if (currentIndex < boardingItems.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate("authScreen");
    }
  };

  useLayoutEffect(() => {
    if (!(currentIndex > boardingItems.length - 1)) {
      setButtonText("Next");
    }
    if (!(currentIndex < boardingItems.length - 1)) {
      setButtonText("Get Started");
    }
  }, [currentIndex, setCurrentIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={boardingItems}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ width: width, aspectRatio: 1 / 1.35 }}
              source={{
                uri: item.image,
              }}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        overScrollMode="never"
        scrollEnabled={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(newIndex);
        }}
        scrollEventThrottle={16}
      />
      <View style={styles.controller}>
        {boardingItems.map((i, k) => (
          <View
            key={k}
            style={[
              styles.selectedControllerItem,
              k !== currentIndex && styles.notSelectedControllerItem,
            ]}
          ></View>
        ))}
      </View>
      <View style={styles.floatButton}>
        <Button title={buttonText} onPress={pageHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatButton: {
    width: "100%",
    marginTop: 30,
  },
  titleContainer: {
    width: 330,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 10,
    maxHeight:150
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 1.2,
    marginTop: 10,
    textAlign: "center",
    fontFamily: GlobalStyles.fonts.medium,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "300",
    letterSpacing: 1.2,
    color: "grey",
    textAlign: "center",
    fontFamily: GlobalStyles.fonts.regular,
  },
  controller: {
    flexDirection: "row",
    alignSelf: "center",
  },
  selectedControllerItem: {
    width: 25,
    height: 6,
    backgroundColor: "black",
    marginHorizontal: 3,
    opacity: 0.7,
    borderRadius: 10,
  },
  notSelectedControllerItem: {
    opacity: 0.2,
    width: 6,
  },
});

export default OnboardingScreen;
