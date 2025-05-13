//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const fontsize = document.getElementById("fontsize");
  console.log(getCookie("fontsize"))
	fontsize.value=getCookie("fontsize")??'16'
    const fontcolor = document.getElementById("fontcolor");
	fontcolor.value=getCookie("fontcolor")??"black"
  document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
document.documentElement.style.setProperty('--fontcolor', fontcolor);
const body = document.getElementById("body");
  body.style.fontSize = `${fontsize}px`;
  body.style.color = fontcolor;
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
