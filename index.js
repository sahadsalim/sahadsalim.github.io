var buttons= document.querySelectorAll('.deLjYW');
var panels= document.querySelectorAll('.panel');
function companySelect(id) {
    for (var i = 0 ; i < buttons.length; i++) {
        if (id==i && (!buttons[i].classList.contains('active'))) {
            buttons[i].classList.add('active');
            panels[i].classList.add('active');
        }else if(id!=i){
            buttons[i].classList.remove('active');
            panels[i].classList.remove('active');
        }
     }
};
function toggleMenu() {
    let menu=document.getElementById('menu_button');
    let header=document.getElementById('header');
    menu.classList.toggle('active');
    header.classList.toggle('active');
}