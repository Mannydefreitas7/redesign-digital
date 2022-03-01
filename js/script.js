'use strict';
const path = './images/';
var containerEl = document.querySelector('#scratch'),
      overlayImgUrl = path + 'card_before_4.png',
      brushImgUrl = path + 'brush.png',
      revealPercent = 50;

  function onReveal(){
    containerEl.className += ' revealed';
    // NOTE: really weird workaround to force Edge 16 to actually detect the css class name addition and render the fade out transition. getElementById doesn't work, it actually needs to be getElementsByTagName. Any style could be changed (like fontSize) to trigger the update
    if(window.navigator.userAgent.indexOf("Edge") > -1){
      document.querySelector('canvas').style.width = '100%';
    }
  }

  if(ScratchIt.isSupported()){
    ScratchIt(containerEl, overlayImgUrl, brushImgUrl, onReveal, revealPercent);
  }