import { StyleSheet, SafeAreaView } from "react-native";
import { WebViewer } from "./src/components/WebViewer";

export default function App() {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <WebViewer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
