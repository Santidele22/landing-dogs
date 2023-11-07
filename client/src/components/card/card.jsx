import { StyledLink } from "../link/StyledLink";
import {
  CardArticle,
  CardMain,
  CardImage,
  CardSection,
  CardFooter,
  Span
} from "./styled/cardStyled";
export default function Card({ id, name, image, origin }) {
  return (
    <CardArticle>
      <CardMain>
        <CardImage src={image} />
        <CardSection>
          <Span>{name} - {origin || "unknow"}</Span>
        </CardSection>
      </CardMain>
      <CardFooter>
        <StyledLink to={`/details/${id}`}>More details</StyledLink>
      </CardFooter>
    </CardArticle>
  );
}
