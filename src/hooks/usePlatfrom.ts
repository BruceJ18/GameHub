import usePlatforms from "./usePlatforms";



const usePlatform = (id?: number) => {
    const { data: platfroms } = usePlatforms();
    return platfroms?.results.find(
    (platfrom) => platfrom.id === id
  );
}

export default usePlatform;