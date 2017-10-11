class GUI
{
    constructor()
    {
        this.game = new Game(level, wave);
    }

    startGame(game)
    {

    }
}





(function () {
    let script = document.createElement('script');
    script.onload = function () {
        let stats = new Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop)
        });
    };
    script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
    document.head.appendChild(script);
})();

// a basic three.js scene

let container, renderer, scene, camera, controls;
let clock = new THREE.Clock();
init();
animate();

function init() {

    // renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight); //set initial screen values
    renderer.setClearColor(0x262626, 1); //grey background
    container = document.createElement('div');
    document.body.appendChild(container);
    container.appendChild(renderer.domElement);

    // scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 200, 800);
    camera.lookAt(scene.position);

    // (camera) controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = 0.49 * Math.PI; // Don't let the camera go below the ground
    controls.enableZoom = true;
    controls.enablePan = false;

    controls.minDistance = 600;
    controls.maxDistance = 1000;

    // light
    let pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(0, 250, 0);
    scene.add(pointLight);
    let ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);

    //Temp platform
    let planeGeometry = new THREE.PlaneGeometry(800, 450, 10, 10);
    let planeMaterial = new THREE.MeshToonMaterial({
        color: 0x006633,
        side: THREE.DoubleSide
    });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

}

// events
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    let delta = clock.getDelta();

    render();
}

function render() {
    renderer.render(scene, camera);
}
