import re
from bs4 import BeautifulSoup

with open('/home/labib-fohayer/.gemini/antigravity/scratch/weichie-rea/REA/01_recon_capture/captured-dom.html', 'r') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

print("=== ALL SECTIONS ON WEICHIE.COM ===")
sections = soup.find_all(['section', 'footer'])
for i, s in enumerate(sections):
    classes = s.get('class', [])
    print(f"\n--- [{i}] SECTION: {' '.join(classes)} ---")
    # print first 500 chars of text
    text = ' '.join(s.get_text().split())
    print(text[:300] + ('...' if len(text) > 300 else ''))
