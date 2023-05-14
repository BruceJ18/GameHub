import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import ColorModeContext from "./state-management/contexts/colorModeContext";
import useGameQueryStore from "./store";

function App() {
  const gameQuery = useGameQueryStore();
  const { colorMode } = useColorMode();

  return (
    <ColorModeContext.Provider value={{ colorMode }}>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>

        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <GameHeading></GameHeading>
            <Flex marginBottom={2} marginTop={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector/>
            </Flex>
          </Box>
          <GameGrid/>
        </GridItem>
      </Grid>
    </ColorModeContext.Provider>
  );
}

export default App;
