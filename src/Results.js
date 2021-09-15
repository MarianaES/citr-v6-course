import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        <div>
          {pets.map((pet) => (
            <Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              key={pet.id} //key only used for react to keep track of changes
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
