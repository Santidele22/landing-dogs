export default function Details (id,
    name,
    image,
    height,//{imperial, metric}
    weight,//{imperial, metric}
    yearsOfLife,
    origin,){
        return (
            <article>
            <header>
              <picture>
                <img src={image} alt={name}/>
              </picture>
            </header>
            <main>
              <section>
                <h1>{name}</h1>
                <h3>{origin}</h3>
              </section>
            </main>
            <footer>
              <StyledLink>More Info</StyledLink>
            </footer>
          </article>
        )

}