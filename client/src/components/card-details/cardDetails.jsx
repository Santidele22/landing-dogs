import {
  DetailNavbar,
  DetailMain,
  DetailArticle,
  DetailPicture,
  DetailSection,
  DetailSectionContainer,
} from "./styled/Details";
import { StyledLink } from "../link/StyledLink";
export default function Details({
  name,
  image,
  height, //{imperial, metric}
  weight, //{imperial, metric}
  yearsOfLife,
  origin,
  Temperaments,
}) {
  return (
    <>
      <DetailNavbar>
      
        <h1>{name}</h1>
      <StyledLink to={"/landing"}>🏠</StyledLink>
        </DetailNavbar>
      <DetailMain>
        <DetailArticle>
          <DetailPicture>
            <img src={image} />
          </DetailPicture>
          <DetailSectionContainer>
            <DetailSection>
            <h2>Origin</h2>
              <span>{origin || 'Unknow'}</span>
              <hr/>
            </DetailSection>
            <DetailSection>
              <h2>Years of life</h2>
              <span>{yearsOfLife}</span>
              <hr/>

            </DetailSection>
            <DetailSection>
              <h2>Weight</h2>
              <ul>
                <li>Imperial: {weight.imperial}</li>
                <li>Metric: {weight.metric}</li> 
              </ul>
              <hr/>

            </DetailSection>
            <DetailSection>
              <h2>Height</h2>
              <ul>
                <li>Imperial: {height.imperial}</li>
                <li>Metric: {height.metric}</li> 
              </ul>
              <hr/>

            </DetailSection>
          <DetailSection>
            <h2>Temperaments</h2>
            <ul>
              {Temperaments?.map((temperament) => (
                <li key={temperament.id}>-{temperament.name}</li>
              ))}
            </ul>
            <hr/>

          </DetailSection>
                </DetailSectionContainer>
        </DetailArticle>
      </DetailMain>
    </>
  );
}
