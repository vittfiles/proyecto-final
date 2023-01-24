//get user data
document.addEventListener("DOMContentLoaded",e=>{
    /* fetch('https://randomuser.me/api/')
    .then(res => {return res.ok ? res.json() : Promise.reject(res)})
    .then(res => console.log(res))
    .catch(err => console.log(res)); */
});
window.addEventListener('scroll', function() {
	activarAnimacion("html-bar");
	activarAnimacion("css-bar");
	activarAnimacion("js-bar");
});
function activarAnimacion(id){
    var html = document.getElementById(id);
	var htmlPos = html.getBoundingClientRect();

	if(htmlPos.top >= 0 && htmlPos.bottom <= window.innerHeight) {
		html.querySelector("div").classList.add("visible");
	}
}