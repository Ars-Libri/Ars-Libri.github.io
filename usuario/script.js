function openMenu(){
    //
  
    var elementsHidden = document.getElementsByClassName('hidden');
  
    for(var i = 0;i<elementsHidden.length;i++){
      elementsHidden[i].style.display = 'none';
    }
  
    //
    document.getElementById('nav-general').style.display = 'flex';
  }
  function closeMenu(){
    document.body.style.backgroundImage = "";
    document.body.style.backgroundSize = "";
    document.body.style.backgroundRepeat = "";
  
    //
  
    var elementsHidden = document.getElementsByClassName('hidden');
  
    for(var i = 0;i<elementsHidden.length;i++){
      elementsHidden[i].style.display = 'flex';
    }
  
    //

    document.getElementById('nav-general').style.display = 'none';
  }

  /* change color */

function showPubli(){
  var element1 = document.getElementById("nav-item-1");
  element1.classList.add('btn-select-category');
  var element2 = document.getElementById("nav-item-2");
  element2.classList.remove('btn-select-category');

  document.getElementById('publicacoes').style.display = 'flex';
  document.getElementById('biografia').style.display = 'none';
}

function showBiografia(){
  var element1 = document.getElementById("nav-item-1");
  element1.classList.remove('btn-select-category');
  var element2 = document.getElementById("nav-item-2");
  element2.classList.add('btn-select-category');

  document.getElementById('publicacoes').style.display = 'none';
  document.getElementById('biografia').style.display = 'flex';
}


