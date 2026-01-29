const bar = document.getElementById('bar');
const nav = document.getElementById('Navbar');
const close = document.getElementById('close');
// clicked btn opne menu //
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  console.log("cliked");
  
}
// close btn //
if (close){
  close.addEventListener('click',() =>{
    nav.classList.remove('active')
  })
}

