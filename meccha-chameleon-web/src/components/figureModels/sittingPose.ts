import type * as THREE_NS from 'three';

type CreatePaintPart = (
	geometry: THREE_NS.BufferGeometry,
	position: [number, number, number],
	rotationZ?: number,
	scale?: [number, number, number],
) => THREE_NS.Mesh;

function capsuleBetween(
	THREE: typeof THREE_NS,
	start: THREE_NS.Vector3,
	end: THREE_NS.Vector3,
	radius: number,
	radialSegments = 44,
) {
	const direction = new THREE.Vector3().subVectors(end, start);
	const length = direction.length();
	const geometry = new THREE.CapsuleGeometry(radius, Math.max(0.01, length - radius * 2), 20, radialSegments);
	const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
	geometry.applyQuaternion(quaternion);
	geometry.translate((start.x + end.x) / 2, (start.y + end.y) / 2, (start.z + end.z) / 2);
	return geometry;
}

function roundedHead(THREE: typeof THREE_NS) {
	const geometry = new THREE.SphereGeometry(0.38, 56, 40);
	geometry.scale(0.95, 0.92, 0.86);
	return geometry;
}

function roundedTorso(THREE: typeof THREE_NS) {
	const geometry = new THREE.CapsuleGeometry(0.38, 0.64, 20, 56);
	geometry.scale(1.02, 1, 0.78);
	return geometry;
}

function roundedHip(THREE: typeof THREE_NS) {
	const geometry = new THREE.SphereGeometry(0.34, 48, 30);
	geometry.scale(1.12, 0.44, 0.82);
	return geometry;
}

export function createSittingPose(THREE: typeof THREE_NS, createPaintPart: CreatePaintPart) {
	const leftArm = capsuleBetween(
		THREE,
		new THREE.Vector3(-0.31, 0.44, 0.02),
		new THREE.Vector3(-0.45, -0.45, 0.06),
		0.145,
	);
	const rightArm = capsuleBetween(
		THREE,
		new THREE.Vector3(0.31, 0.44, 0.02),
		new THREE.Vector3(0.45, -0.45, 0.06),
		0.145,
	);
	const leftLeg = capsuleBetween(
		THREE,
		new THREE.Vector3(-0.16, -0.5, 0.14),
		new THREE.Vector3(-0.52, -0.72, 0.72),
		0.2,
	);
	const rightLeg = capsuleBetween(
		THREE,
		new THREE.Vector3(0.16, -0.5, 0.14),
		new THREE.Vector3(0.52, -0.72, 0.72),
		0.2,
	);

	return [
		createPaintPart(roundedHead(THREE), [0, 1.12, 0.02]),
		createPaintPart(new THREE.SphereGeometry(0.13, 36, 22), [0, 0.77, 0], 0, [0.92, 0.58, 0.82]),
		createPaintPart(roundedTorso(THREE), [0, 0.13, 0]),
		createPaintPart(leftArm, [0, 0, 0]),
		createPaintPart(rightArm, [0, 0, 0]),
		createPaintPart(roundedHip(THREE), [0, -0.43, 0.12]),
		createPaintPart(leftLeg, [0, 0, 0]),
		createPaintPart(rightLeg, [0, 0, 0]),
	];
}
