// Only change code below this line
function urlSlug(title) {
    return title.toLowerCase().split(" ").filter(a => a !== "").join("-")
  
  }
  // Only change code above this line
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
  console.log(urlSlug(" Winter Is  Coming"))