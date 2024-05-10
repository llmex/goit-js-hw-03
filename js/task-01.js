function slugify(title) {
  const lowMessage = title.toLowerCase();
  let slug = "";
  for (let i = 0; i < lowMessage.length; i += 1) {
    if (lowMessage[i] === " ") {
      slug += "-";
    } else {
      slug += lowMessage[i];
    }
  }
  return slug;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
