console.log('Loaded!');
//change the element
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

// move the image
var img = document.getElementById('img1');
var marginLeft = 0;
var moveRight=function(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft= marginLeft + 'px'; 
};
img.onclick = function(){
    var interval = setInterval(moveRight, 40);
    
};
 


    

    

