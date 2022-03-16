import React from "react";
import { Container, Text } from "./components/styles/Container.styles";
import { GlobalStyles } from "./components/styles/Global.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container w="100vw" h="100vh" p="0" m="0" bgc="#3A0CA3">
        <Text color="#F72585" size="3rem" weight="600">
          Hello World!
        </Text>
      </Container>
    </>
  );
}

export default App;
