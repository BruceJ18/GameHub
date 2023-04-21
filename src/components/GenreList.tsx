import { HStack, List, ListItem, Image, Text, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";


interface Props {
  onSelectedGenre: (genre: Genre) => void;
}


const GenreList = ({onSelectedGenre}: Props) => {
  const { dataArray, isLoading, error } = useGenres();


  if (error) return null;
  if (isLoading) return <Spinner/>;

  return (
    <List>
      {dataArray.map((genre) => (
        <ListItem paddingY='5px' key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
          <Button onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
