import { useEffect } from "react";
import Details from "./cardDetails";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogById } from "../../redux/actions/actions";
export default function DetailsRendering() {
  const { id } = useParams();
  const { dogDetail } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogById(id));
  }, [dispatch]);

  return (
    <>
      {dogDetail?.map((dog) => (
        <Details
          key={dog.id}
          id={dog.id}
          name={dog.name}
          image={dog.image}
          height={dog.height}
          weight={dog.weight}
          yearsOfLife={dog.yearsOfLife}
          origin={dog.origin}
          Temperaments={dog.Temperaments}
        />
      ))}
    </>
  );
}
