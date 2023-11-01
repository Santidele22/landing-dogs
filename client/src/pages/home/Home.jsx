import {StyledLink} from "../../components/link/StyledLink";
import { Video } from "../../components/Video/Video";
import {
  Article,
  HomeContainer,
  Header,
  Footer
} from "./styled-component/homestyled";
export default function Home({ url }) {
  return (
    <HomeContainer>
      <Video autoPlay muted loop>
        <source src={url} type="video/mp4" />
      </Video>
      <Article>
        <Header>
            <h1>Uncover the World of Dogs 🐾</h1>
          <p>
             Welcome to our Dog Information Hub!
            From breed insights to expert tips, explore a treasure trove of
            canine knowledge. Dive into the world of our four-legged friends
            today! 📚🐶
          </p>
        </Header>
        <Footer>
          <StyledLink to={"/landing"}>Get Started</StyledLink>
        </Footer>
      </Article>
    </HomeContainer>
  );
}
