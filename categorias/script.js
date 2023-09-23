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