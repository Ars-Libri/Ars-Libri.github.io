function openMenu(){
  document.body.style.backgroundImage = "url('../assets/menu/elipses-background.webp')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";

  var elementsHidden = document.getElementsByClassName('hidden');

  for(var i = 0;i<elementsHidden.length;i++){
    elementsHidden[i].style.width = '0';
    elementsHidden[i].style.height = '0';
  }
    document.getElementById('nav-general').style.display = 'flex';
}
function closeMenu(){
  document.body.style.backgroundImage = "";
  document.body.style.backgroundSize = "";
  document.body.style.backgroundRepeat = "";
    var elementsHidden = document.getElementsByClassName('hidden');

    for(var i = 0;i<elementsHidden.length;i++){
        elementsHidden[i].style.width = '100vw';
        elementsHidden[i].style.height = 'auto';
    }

    document.getElementById('nav-general').style.display = 'none';
}