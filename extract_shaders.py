with open('/home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/REA/bundles/HeroHomepage-Vz5eg3tH.js', 'r') as f:
    code = f.read()

idx = code.find(',N=3')
with open('/home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/shaders_found.txt', 'w') as out:
    out.write(code[idx-3000:idx])
print("Saved shaders_found.txt")
