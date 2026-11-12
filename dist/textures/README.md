# WebGL Textures & Matcaps Repository
Place extracted environment maps (`.hdr`, `.exr`), PBR texture channels (`albedo`, `roughness`, `normal`, `metallic`, `ao`), noise maps, and spherical matcaps here.

### Texture Optimization Guidelines:
- Size dimensions should strictly adhere to powers of two (`512x512`, `1024x1024`, `2048x2048`) for optimal GPU mipmapping.
- Prefer WebP format for lossy textures to save bundle bandwidth.
- Matcaps should be high dynamic range or 8-bit sRGB depending on shader requirements.
