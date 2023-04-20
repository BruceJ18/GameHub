import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";

const GenreList = () => {
  const { dataArray, isLoading, error } = useGenres();


  if (error) return null;
  if (isLoading) return <Spinner/>;

  return (
    <List>
      {dataArray.map((data) => (
        <ListItem paddingY='5px' key={data.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(data.image_background)}
            />
            <Text fontSize='lg'>{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
