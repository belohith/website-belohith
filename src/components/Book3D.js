import React from "react";
import * as THREE from "three";

class Book3D extends React.Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    // create a scene, camera, and renderer
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    // set the size of the renderer and add it to the DOM
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    // add some objects to the scene
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    

    // position the camera and render the scene
    this.camera.position.z = 10;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.renderer.domElement.addEventListener(
      "mousemove",
      this.handleMouseMove
    );
    this.renderScene();
  }
  handleMouseMove(event) {
    // calculate the cursor's position in normalized device coordinates
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    // update the camera's position
    this.camera.position.x = x;
    this.camera.position.y = y;
  }

  renderScene() {
    // render the scene
    this.renderer.render(this.scene, this.camera);
    // update the cube's rotation
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    // request another render call on the next frame
    requestAnimationFrame(this.renderScene);
  }

  render() {
    return (
      <div
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default Book3D;