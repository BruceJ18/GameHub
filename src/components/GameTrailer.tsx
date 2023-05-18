import useTrailers from "../hooks/useTrailers";

interface Props {
  gameid: number;
}

const GameTrailer = ({ gameid }: Props) => {
  const { data, error, isLoading } = useTrailers(gameid);
  console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  const results = data?.results[0];
  return results ? (
    <video 
    controls 
    src={results.data[480]} 
    poster={results.preview} 
    />
  ) : null;
};

export default GameTrailer;
