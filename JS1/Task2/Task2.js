const greet = () => {
  const input = prompt("Enter Your Name:");

  if (!input) {
    console.error("No name entered");
    return;
  }

  document.getElementById("print").innerHTML = "Hello " + input + "!";
};

greet();

export default greet;
