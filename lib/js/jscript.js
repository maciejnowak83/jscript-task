function increaseFontSize(num)
{
    //zwiększamy czcionkę wszystkich elementów o współcznnik p
   
    var pars=  document.querySelectorAll('p,h2, th, tr');
    pars.forEach(function(oneel) {


        var style = window.getComputedStyle(oneel, null).getPropertyValue('font-size');
        var fSize = parseFloat(style); 

        oneel.style.fontSize = (fSize + num) + 'px';

   });

}

function decreaseFontSize(num)
{
    //zmniejszamy czcionkę dla wszystkich elementów o współczynik num
   
    var pars=  document.querySelectorAll('p,h2, th, tr');
    pars.forEach(function(oneel) {


        var style = window.getComputedStyle(oneel, null).getPropertyValue('font-size');
        var fSize = parseFloat(style); 

        oneel.style.fontSize = (fSize - num) + 'px';

   });
}

function setFontSize(size)
{
    //ustawiamy czcionkę jedną funkcją
    var strsize = size+"px";
    var pars=  document.querySelectorAll('p');
    pars.forEach(function(onep) {
     onep.style.fontSize = strsize;
   });
}  



function setFontColor(color)
{
    var pars=  document.querySelectorAll('p,h2, th, tr');
    pars.forEach(function(onep) {
      onep.style.color = color;
   }); 
}