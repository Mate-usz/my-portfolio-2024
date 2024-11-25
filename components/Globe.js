"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

let globe;
let renderer;
let scene;
let camera;

export default function Globe() {
  const mountRef = useRef(null);
  const [targetPos, setTargetPos] = useState();

  // PALLETTE
  // #91FFFF
  // #08A4A7
  // #E9FFFF
  // #4DFED1
  // #0BDBB6
  const markers = [
    // { lat: 0, lon: 0, color: 0x000000 }, // Null Island
    // { lat: 51.5074, lon: -0.1278, color: 0x91ffff }, // London
    { lat: 43.1107, lon: 12.3908, color: 0x91ffff }, // Perugia
  ];

  const moveTo = (marker) => {
    // const phi = (marker.lat - 90) * (Math.PI / 180);
    // const theta = (180 - marker.lon) * (Math.PI / 180);
    const phi = (marker.lat - 90) * (Math.PI / 180);
    const theta = (180 + marker.lon) * (Math.PI / 180);

    const x = Math.sin(phi) * Math.cos(theta);
    const y = Math.cos(phi);
    // console.log("CALCS", phi, theta, x, y, x2, theta - Math.PI / 2);

    // london
    // 0.8524
    // -1.6

    // perugia
    // 0.6426
    // -1.8030

    // globe.rotation.y += distY * 0.01;
    // globe.rotation.x += distX * 0.01;

    setTargetPos({
      y: -(theta - Math.PI / 2),
      x: y,
    });
  };

  const moving = () => {
    if (
      !targetPos ||
      !targetPos.x ||
      !targetPos.y ||
      (globe.rotation.y == targetPos.y && globe.rotation.x == targetPos.x)
    )
      return;

    const distX = targetPos.x - globe.rotation.x;
    const distY = targetPos.y - globe.rotation.y;

    globe.rotation.y += distY * 0.01;
    globe.rotation.x += distX * 0.01;
  };

  useEffect(() => {
    const mount = mountRef.current;
    // Set scene and camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);
    // Globe (Sphere Geometry)
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load("/earth.jpg"),
    });
    globe = new THREE.Mesh(geometry, material);

    scene.add(globe);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const addMarker = (lat, lon, color) => {
      // Convert latitude and longitude to 3D coordinates
      const radius = 1.01;
      const phi = (lat - 90) * (Math.PI / 180);
      const theta = (180 - lon) * (Math.PI / 180);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      // Create marker
      const markerHeight = 0.2; // Adjust height of the cylinder
      const markerRadius = 0.01; // Adjust radius of the cylinder
      const markerGeometry = new THREE.CylinderGeometry(
        markerRadius,
        markerRadius,
        markerHeight,
        16
      );
      // const markerMaterial = new THREE.MeshStandardMaterial({ color });
      const markerMaterial = new THREE.MeshStandardMaterial({
        color: color,
        opacity: 0.6,
        transparent: true,
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);

      marker.position.set(x, y, z);
      // Orient the cylinder to point outward
      marker.lookAt(new THREE.Vector3(0, 0, 0));
      marker.rotateX(Math.PI / 2); // Align with globe's surface normal

      // Add marker as a child of the globe
      globe.add(marker);
    };

    markers.forEach((marker) =>
      addMarker(marker.lat, marker.lon, marker.color)
    );

    // Controls: Zoom & Drag
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (event) => {
      isDragging = true;
      previousMousePosition = {
        x: event.offsetX,
        y: event.offsetY,
      };
    };
    const onMouseUp = () => {
      isDragging = false;
      // console.log("UP", globe.rotation);
    };
    const onMouseMove = (event) => {
      if (!isDragging) return;

      const deltaMove = {
        x: event.offsetX - previousMousePosition.x,
        y: event.offsetY - previousMousePosition.y,
      };

      globe.rotation.y += deltaMove.x * 0.01;
      globe.rotation.x += deltaMove.y * 0.01;

      previousMousePosition = {
        x: event.offsetX,
        y: event.offsetY,
      };
    };
    const onWheel = (event) => {
      camera.position.z += event.deltaY * 0.01;
    };

    mount.addEventListener("mousedown", onMouseDown);
    mount.addEventListener("mouseup", onMouseUp);
    mount.addEventListener("mousemove", onMouseMove);
    mount.addEventListener("wheel", onWheel);

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Clean-up
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      mount.removeEventListener("mousedown", onMouseDown);
      mount.removeEventListener("mouseup", onMouseUp);
      mount.removeEventListener("mousemove", onMouseMove);
      mount.removeEventListener("wheel", onWheel);
    };
  }, []);

  useEffect(() => {
    // Animation Loop
    const animate = () => {
      console.log("Target", targetPos);

      if (targetPos) {
        const distX = targetPos.x - globe.rotation.x;
        const distY = targetPos.y - globe.rotation.y;

        globe.rotation.y += distY * 0.01;
        globe.rotation.x += distX * 0.01;

        console.log(
          "DIST",
          distX,
          distY,
          Math.sqrt(distX * distX + distY * distY)
        );

        if (Math.sqrt(distX * distX + distY * distY) < 0.01) {
          setTargetPos(null);
        }
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      mountRef.current;
    };
  }, [targetPos]);

  return (
    <section className="relative" style={{ width: "100%", height: "100vh" }}>
      <button
        className="absolute"
        onClick={() => moveTo(markers[0])}
        style={{
          width: "7rem",
          height: "2rem",
          top: "7rem",
          right: "2rem",
          background: "white",
          zIndex: "2",
        }}
      >
        WHERE AM I?
      </button>
      <div
        className="absolute"
        ref={mountRef}
        style={{ width: "100%", height: "100vh" }}
      />
    </section>
  );
}
