import { WebView } from "react-native-webview";

export const WebViewer = () => {
  const handleMessage = (event: any) => {
    console.log(event.nativeEvent.data);
  };
  return (
    <WebView
      allowsInlineMediaPlayback={true}
      cacheEnabled={true}
      javaScriptEnabled
      javaScriptEnabledAndroid={true}
      mediaPlaybackRequiresUserAction={false}
      mixedContentMode={"compatibility"}
      originWhitelist={["https://*"]}
      // scalesPageToFit
      //TODO: add source
      source={{
        uri: "",
      }}
      // startInLoadingState={true}
      useWebkit
      useSharedProcessPool={true}
      nativeConfig={{
        props: { webContentsDebuggingEnabled: true },
      }}
      onMessage={handleMessage}
    />
  );
};
