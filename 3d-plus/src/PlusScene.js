class PlusScene {
    constructor(scene) {
        this.scene = scene;
        this.coin = null;
        this.isRotating = false;
    }

    createCoin() {
        const geometry = new THREE.CircleGeometry(1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        this.coin = new THREE.Mesh(geometry, material);
        this.scene.add(this.coin);
    }

    startRotation() {
        this.isRotating = true;
        this.animate();
    }

    stopRotation() {
        this.isRotating = false;
    }

    animate() {
        if (this.isRotating) {
            requestAnimationFrame(() => this.animate());
            this.coin.rotation.z += 0.05; // Rotate the coin
        }
    }
}

export default PlusScene;