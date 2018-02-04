document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    var fuse = document.querySelector('#fuse-cursor');
    var fuseProgress = document.querySelector('#fuse-progress');

    scene.addEventListener('loaded', function (e) {
        splash.style.display = 'none';
    });

    fuse.addEventListener('fusing', function (e) {
        fuseProgress.emit('fusing');
    });

    document.querySelector('#a').addEventListener('click', function (e) {
        document.querySelector('#shoe').emit('a-clicked');
    });

    document.querySelector('#b').addEventListener('click', function (e) {
        document.querySelector('#shoe').emit('b-clicked');
    });

    document.querySelector('#c').addEventListener('click', function (e) {
        document.querySelector('#shoe').emit('c-clicked');
    });
});