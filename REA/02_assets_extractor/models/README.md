# 3D Models Staging Repository
Place extracted `.glb`, `.gltf`, `.bin`, `.obj`, or `.fbx` files here.

### Best Practices:
- Prefer Draco-compressed binary `.glb` files over loose `.gltf` + `.bin`.
- Check vertex count and draw calls before porting into Three.js.
- Optimize meshes using `@gltf-transform/cli` or Blender decimate modifier if vertex count > 50,000.
