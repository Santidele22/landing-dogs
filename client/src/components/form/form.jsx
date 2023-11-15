import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createDog, getTemperaments } from "../../redux/actions/actions";
import validation from "../../utils/validationForm";
import { FormMain,StyledForm,SectionForm } from "./styled/formStyled";
import { DetailNavbar } from "../card-details/styled/Details";
import { StyledLink } from "../link/StyledLink";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    height: {
      imperial: "",
      metric: "",
    },
    weight: {
      imperial: "",
      metric: "",
    },
    yearsOfLife: "",
    origin: "",
    Temperaments: [],
  });
  const { temperaments } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Verificar si el campo pertenece a height o weight y actualizar el estado en consecuencia
    if (
      name.startsWith("height.imperial") ||
      name.startsWith("height.metric")
    ) {
      setFormData((prevData) => ({
        ...prevData,
        height: {
          ...prevData.height,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (
      name.startsWith("weight.imperial") ||
      name.startsWith("weight.metric")
    ) {
      setFormData((prevData) => ({
        ...prevData,
        weight: {
          ...prevData.weight,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleTemperamentsChange = (e) => {
    const selectedTemperaments = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prevData) => {
      const updatedTemperaments = prevData.Temperaments.slice(); // Copiar el array actual
      selectedTemperaments.forEach((temp) => {
        const index = updatedTemperaments.indexOf(temp);
        if (index !== -1) {
          // Si el temperamento ya está en la lista, quítalo
          updatedTemperaments.splice(index, 1);
        } else {
          // Si el temperamento no está en la lista, agrégalo
          updatedTemperaments.push(temp);
        }
      });
      return {
        ...prevData,
        Temperaments: updatedTemperaments,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar validación de datos
    const validationErrors = validation(formData);
    setErrors(validationErrors);
    // Si no hay errores de validación, puedes continuar con el proceso de envío de datos
    if (Object.keys(validationErrors).length === 0) {
      dispatch(createDog(formData));
      setFormData({
        name: "",
        image: "",
        height: {
          imperial: "",
          metric: "",
        },
        weight: {
          imperial: "",
          metric: "",
        },
        yearsOfLife: "",
        origin: "",
        Temperaments: [],
      })
      alert('Dog Created!!!')
    }else{
      alert('Faltan datos a completar! Por favor llene todo el formulario antes de crear el perro')
    }

  };

  return (
    <>
      <DetailNavbar>
      <h1>Create a Dog🐶</h1>
    <StyledLink to={"/landing"}>🏠</StyledLink>
      </DetailNavbar>
    <FormMain>
      <StyledForm onSubmit={handleSubmit}>
        <SectionForm>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter a name"
          />
          <hr/>

        </SectionForm>
        <SectionForm>
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            placeholder="Enter a origin"
          />
          <hr/>

        </SectionForm>
        <SectionForm>
          <label htmlFor="yearsOfLife">Years of Life:</label>
          <input
            type="text"
            name="yearsOfLife"
            value={formData.yearsOfLife}
            onChange={handleChange}
            placeholder="Enter a year"
          />
          <hr/>
        </SectionForm>
        <SectionForm>
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter a image"
          />
          <hr/>

        </SectionForm>
        <SectionForm>
          <label htmlFor="height.imperial">Height (Imperial):</label>
          <input
            type="text"
            name="height.imperial"
            value={formData.height.imperial}
            onChange={handleChange}
            placeholder="Enter a height (imperial)"
          />
          <hr/>

        </SectionForm>
        <SectionForm>
          <label htmlFor="height.metric">Height (Metric):</label>
          <input
            type="text"
            name="height.metric"
            value={formData.height.metric}
            onChange={handleChange}
            placeholder="Enter a height (metric)"
          />
          <hr/>

        </SectionForm>
        <SectionForm>
          <label htmlFor="weight.imperial">Weight (Imperial):</label>
          <input
            type="text"
            name="weight.imperial"
            value={formData.weight.imperial}
            onChange={handleChange}
            placeholder="Enter a weight (imperial)"
          />
          <hr/>

        </SectionForm>
        <SectionForm>
          <label htmlFor="weight.metric">Weight (Metric):</label>
          <input
            type="text"
            name="weight.metric"
            value={formData.weight.metric}
            onChange={handleChange}
            placeholder="Enter a weight (metric)"
          />
          <hr/>

        </SectionForm>
        <SectionForm>
          <label htmlFor="temperaments">Temperaments:</label>
          <select
            name="temperaments"
            multiple
            value={formData.Temperaments}
            onChange={handleTemperamentsChange}
          >
            {temperaments?.map((e) => (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            ))}

          </select>
          <hr/>
        </SectionForm>
        <SectionForm>
        <button type="submit">Create Dog</button>
        </SectionForm>
      </StyledForm>
    </FormMain>
    </>
  );
}
