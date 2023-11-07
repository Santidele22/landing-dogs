function isValidURL(url) {
  // Expresión regular para validar una URL
  const urlPattern = new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/);

  return urlPattern.test(url);
}

export default function validation(userData) {
  const errors = {};

  // Validación del campo "name"
  if (!userData.name) {
    errors.name = "Name is required";
  }

  // Validación del campo "image"
  if (!userData.image) {
    errors.image = "Image URL is required";
  } else if (!isValidURL(userData.image)) {
    errors.image = "Invalid URL";
  }

  // Validación de los campos de altura (imperial y metric)
  if (!userData.height.imperial || !userData.height.metric) {
    errors.height = "Both imperial and metric heights are required";
  }

  // Validación de los campos de peso (imperial y metric)
  if (!userData.weight.imperial || !userData.weight.metric) {
    errors.weight = "Both imperial and metric weights are required";
  }

  // Validación del campo "yearsOfLife"
  if (!userData.yearsOfLife) {
    errors.yearsOfLife = "Years of life is required";
  }

  // Validación del campo "origin"
  if (!userData.origin) {
    errors.origin = "Origin is required";
  }



  return errors;
}
