
// function changebtnValue() {
//     var button = document.getElementById('btn');
//     var isMobile = window.matchMedia('(max-width: 480px)').matches;

//     if (isMobile) {
//         button.innerText = '>';
//     } else {
//         button.innerText = 'Creer votre badge.';
//     }
// }

// updateButtonValue();

// window.addEventListener('resize', updateButtonValue);


// function close(){
let btn = document.getElementById("pho");

btn.addEventListener("click", function hide (){
    document.getElementById("help").style.transform = "rotateX(-90deg)";
})

