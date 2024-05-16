import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme, GlobalStyle } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const globalStyles = {
  body: {
    background: "linear-gradient(135deg, #00FF00, #FFD700, #0000FF)",
    color: "white",
    fontFamily: "'Courier New', Courier, monospace",
  },
};

const root = document.getElementById("root");
if (!root) throw new Error("Failed to find the root element");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyle styles={globalStyles} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
