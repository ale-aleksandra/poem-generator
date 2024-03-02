function displayPoem(response) {
  console.log("Poem generated.");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let keyword = document.querySelector("#keyword");

  let apiKey = "739473ae0tafe02b875bc88cd82o1460";
  let prompt = `User instructions are: Generate a poem about ${keyword.value}.`;
  let context =
    "Generate a four-line poem in basic HTML and separate each line with a <br />. The text should ALWAYS be 16px, italic and black. Make sure to follow user instructions. The poem DOESN'T have a title. Sign the poem at the end with 'SheCodes AI' inside a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating a poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
