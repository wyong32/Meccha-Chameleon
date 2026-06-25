import type * as THREE_NS from 'three';

type CreatePaintPart = (
	geometry: THREE_NS.BufferGeometry,
	position: [number, number, number],
	rotationZ?: number,
	scale?: [number, number, number],
) => THREE_NS.Mesh;

export function createStandingPose(THREE: typeof THREE_NS, createPaintPart: CreatePaintPart) {
	const leftArmPath = new THREE.CatmullRomCurve3([
		new THREE.Vector3(-0.27, 0.57, -0.01),
		new THREE.Vector3(-0.42, 0.43, -0.01),
		new THREE.Vector3(-0.5, 0.1, -0.01),
		new THREE.Vector3(-0.52, -0.24, -0.01),
		new THREE.Vector3(-0.49, -0.43, -0.01),
	]);
	const rightArmPath = new THREE.CatmullRomCurve3([
		new THREE.Vector3(0.27, 0.57, -0.01),
		new THREE.Vector3(0.42, 0.43, -0.01),
		new THREE.Vector3(0.5, 0.1, -0.01),
		new THREE.Vector3(0.52, -0.24, -0.01),
		new THREE.Vector3(0.49, -0.43, -0.01),
	]);

	return [
		createPaintPart(new THREE.SphereGeometry(0.44, 48, 36), [0, 1.21, 0], 0, [1, 1.08, 0.94]),
		createPaintPart(new THREE.SphereGeometry(0.18, 36, 24), [0, 0.76, 0], 0, [1, 1.05, 0.92]),
		createPaintPart(new THREE.CapsuleGeometry(0.38, 0.9, 14, 40), [0, 0.03, 0], 0, [1.02, 1, 0.88]),
		createPaintPart(new THREE.TubeGeometry(leftArmPath, 56, 0.15, 18, false), [0, 0, 0]),
		createPaintPart(new THREE.TubeGeometry(rightArmPath, 56, 0.15, 18, false), [0, 0, 0]),
		createPaintPart(new THREE.SphereGeometry(0.165, 28, 20), [-0.49, -0.43, -0.01], 0, [0.94, 1.2, 0.94]),
		createPaintPart(new THREE.SphereGeometry(0.165, 28, 20), [0.49, -0.43, -0.01], 0, [0.94, 1.2, 0.94]),
		createPaintPart(new THREE.CapsuleGeometry(0.21, 0.72, 14, 34), [-0.2, -0.98, 0], 0.012, [1, 1, 0.9]),
		createPaintPart(new THREE.CapsuleGeometry(0.21, 0.72, 14, 34), [0.2, -0.98, 0], -0.012, [1, 1, 0.9]),
	];
}
