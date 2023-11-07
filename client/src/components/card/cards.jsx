import Card from "./card";

 export default function Cards({dogs,dogsPerPage,currentPage,id}) {
    const indexOfLastDog = (currentPage + 1) * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const dogsToShow = dogs.slice(indexOfFirstDog, indexOfLastDog);
   return (
    <>
        {dogsToShow?.map((dog) => (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            origin={dog.origin}
            source={dog.source}
          />
         ))}
    </>
   );
 }
