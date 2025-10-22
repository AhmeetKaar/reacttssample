import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const STANDARD_HORIZONTAL_PADDING = 16;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 100 : 70;
const ICON_SIZE = 28;

const CustomAppBar = ({ title, onBackPress }: { title: string; onBackPress?: (() => void) | undefined }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {onBackPress ? (
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBackPress}
            accessibilityRole="button"
            accessibilityLabel="Geri"
          >
            <Ionicons name="chevron-back" size={ICON_SIZE} color="#222" />
          </TouchableOpacity>
        ) : (
          <View style={styles.rightPlaceholder} />
        )}
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.title}
          accessibilityRole="header"
        >
          {title}
        </Text>
        <View style={styles.rightPlaceholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: APPBAR_HEIGHT,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: STANDARD_HORIZONTAL_PADDING,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.09,
    shadowRadius: 2.5,
    elevation: 3,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ececec",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 44,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 3,
    paddingRight: 3,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: width < 370 ? 17 : 19,
    fontWeight: Platform.OS === "ios" ? "700" : "600",
    color: "#222",
    marginHorizontal: 8,
    paddingTop: 2,
    paddingBottom: 2,
  },
  rightPlaceholder: {
    width: 44,
    height: 44,
  },
});

export default CustomAppBar;