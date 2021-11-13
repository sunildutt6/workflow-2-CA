import "./sass/style.scss";

import ApolloClient, { gql } from "apollo-boost";
import "regenerator-runtime/runtime";
import { orderBy } from "lodash";

const getData = async () => {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
  });

  const json = await client.query({
    query: gql`
      {
        countries {
          code
          name
          emoji
          capital
          phone
        }
      }
    `,
  });

  const countries = json.data.countries;
  createHtml(orderBy(countries, ["name"], ["desc"]));
};

getData();

function createHtml(countries) {
  const results = document.querySelector(".results");
  results.innerHTML = "";
  for (let i = 0; i < countries.length; i++) {
    results.innerHTML += `<div class= "result">
                             <h2>${countries[i].name.toUpperCase()} ${
      countries[i].emoji
    }</h2>
                             <p>Capital: ${countries[i].capital}</p>
                              <p>Dial-Code: +${countries[i].phone}</p>
                                </div>`;
  }
}
