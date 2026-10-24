export const SCULPTURE_FORMS = ["knot", "orbit", "bloom"];
const TAU = Math.PI * 2;
const normalize = ([x, y, z]) => {
  const length = Math.hypot(x, y, z) || 1;
  return [x / length, y / length, z / length];
};
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

function center(t) {
  const radius = 1.72 + .47 * Math.cos(3 * t);
  return [radius * Math.cos(2 * t), radius * Math.sin(2 * t), .72 * Math.sin(3 * t)];
}

export function sculpturePoint(form, u, v) {
  const a = u * TAU;
  const b = v * TAU;
  if (form === "bloom") {
    const phi = v * Math.PI;
    const radius = 2.08 + .16 * Math.sin(3 * a) * Math.sin(phi) ** 3 + .14 * Math.cos(4 * phi);
    return [radius * Math.cos(a) * Math.sin(phi), radius * Math.cos(phi), radius * Math.sin(a) * Math.sin(phi)];
  }
  if (form === "orbit") {
    const radius = 1.72 + .73 * Math.cos(b);
    return [radius * Math.cos(a), radius * Math.sin(a), .73 * Math.sin(b)];
  }
  const point = center(a);
  const ahead = center(a + .0001);
  const tangent = normalize(ahead.map((n, i) => n - point[i]));
  const normal = normalize(cross(tangent, [0, 0, 1]));
  const binormal = cross(normal, tangent);
  return point.map((n, i) => n + .57 * (normal[i] * Math.cos(b) + binormal[i] * Math.sin(b)));
}

export function buildSculptureGeometry(form = "knot", segments = 108, rings = 32) {
  if (!SCULPTURE_FORMS.includes(form)) throw new RangeError("Unknown sculpture form");
  const positions = new Float32Array((segments + 1) * (rings + 1) * 3);
  const normals = new Float32Array(positions.length);
  const faces = [];
  for (let i = 0; i <= segments; i++) {
    for (let j = 0; j <= rings; j++) {
      const u = i / segments;
      const v = j / rings;
      const point = sculpturePoint(form, u, v);
      const du = sculpturePoint(form, u + .0001, v).map((n, k) => n - point[k]);
      const dv = sculpturePoint(form, u, v + .0001).map((n, k) => n - point[k]);
      let normal = normalize(cross(du, dv));
      if (Math.hypot(...normal) < .1) normal = normalize(point);
      const offset = (i * (rings + 1) + j) * 3;
      positions.set(point, offset);
      normals.set(normal, offset);
      if (i < segments && j < rings) {
        const a = i * (rings + 1) + j;
        faces.push({ a, b: a + rings + 1, c: a + rings + 2, d: a + 1, depth: 0, nx: 0, ny: 0, nz: 0 });
      }
    }
  }
  return { positions, normals, faces };
}
