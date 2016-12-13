var blipp = require('blippar').blipp;
var scene = blipp.addScene();

// Scene creation
scene.onCreate = function() {
    var Plane = scene.addSprite().setColor('#ff7d32aa').setScale(400);
}