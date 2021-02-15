// Return a reversed string
const palind = str => {
  str = str.toLowerCase();
  console.log(
    str ===
      str
        .split("")
        .reverse()
        .join("")
  );
};
palind("Kayak");
