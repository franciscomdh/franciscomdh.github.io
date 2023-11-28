

document.getElementById('loadButton').addEventListener('click', function() {
    var url =document.getElementById('urlInput').value;
    document.getElementById('lastHit').src ="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ url+"&amp;{ ADD YOUR PARAMETERS HERE }";
});
