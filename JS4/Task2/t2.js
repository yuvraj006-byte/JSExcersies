"use strict";

const search = document.querySelector("#searchShows");

search.addEventListener("submit", async function (evt) {
  evt.preventDefault();

  const value_from_input = document.querySelector("#query").value;

  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${value_from_input}`,
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
});
