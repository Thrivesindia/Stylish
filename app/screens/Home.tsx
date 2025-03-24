import { Text, View } from "react-native";
import { useTheme } from "../utils/ThemeProvider";

const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Text
        style={{ fontSize: 20, textAlign: "center", color: colors.textPrimary }}
      >
        Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;
