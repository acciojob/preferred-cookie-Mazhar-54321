//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const fontsize = document.getElementById("fontsize");
  let savedFontSize =getCookie("fontsize")??'16'
	fontsize.value=savedFontSize
    const fontcolor = document.getElementById("fontcolor");
    let savedFontColor =getCookie("fontcolor")??"black"
	fontcolor.value=savedFontColor
  document.documentElement.style.setProperty('--fontsize', `${savedFontSize}px`);
document.documentElement.style.setProperty('--fontcolor', savedFontColor);
const body = document.getElementById("body");
  body.style.fontSize = `${savedFontSize}px`;
  body.style.color = savedFontColor;
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop form from reloading the page

    const fontsize = document.getElementById("fontsize").value;
    const fontcolor = document.getElementById("fontcolor").value;

    // Store in cookies
    document.cookie = `fontsize=${fontsize}`;
    document.cookie = `fontcolor=${fontcolor}`;

    alert("Data saved in cookies!");
  });
});
function getCookie(key) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
