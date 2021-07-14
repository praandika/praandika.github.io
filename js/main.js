// Fungsi autofocus Checkbox Input
document.getElementById("ck_other").addEventListener('click',function(){
    let input_other = document.getElementById("input_other");
    input_other.focus();
});

// Tampilkan menu User
function tampilMenu(){
    let show = document.getElementById("menuakun").classList.toggle("show");
    return show;
}