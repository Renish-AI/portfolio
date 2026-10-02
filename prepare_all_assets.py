import os
from PIL import Image, ImageFilter
import numpy as np
from scipy import ndimage

OUTPUT_DIR = r'd:\portfolio\assets_prepared'
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 1. PERSON B&W (Frame 25)
img25 = Image.open(r'd:\portfolio\extracted\ezgif-frame-025.jpg')
# Crop person area: x: 440 to 1480, y: 370 to 1050
person_crop_bw = img25.crop((440, 370, 1480, 1050))
arr_bw = np.array(person_crop_bw)

# Background is white/light grey (r>235 and g>235 and b>235)
is_bg = (arr_bw[:,:,0] > 230) & (arr_bw[:,:,1] > 230) & (arr_bw[:,:,2] > 230)
is_fg = ~is_bg

# The person's center is at x = 960 - 440 = 520, y = 600 - 370 = 230
labeled, num_features = ndimage.label(is_fg)
person_lbl = labeled[230, 520]
person_mask = (labeled == person_lbl)

# In case letters of "ALF" or "MAS" are nearby, they are separate components.
# Also fill any holes in face/eyes:
person_mask = ndimage.binary_fill_holes(person_mask)

# Smooth edges
mask_im = Image.fromarray((person_mask.astype(np.uint8) * 255)).filter(ImageFilter.GaussianBlur(radius=0.7))
mask_arr = np.array(mask_im)

rgba_bw = np.dstack([arr_bw, mask_arr])
img_bw = Image.fromarray(rgba_bw, mode='RGBA')
img_bw.save(os.path.join(OUTPUT_DIR, 'portrait-bw.png'))
print('Saved portrait-bw.png')

# 2. PERSON COLOR (Frame 3)
img3 = Image.open(r'd:\portfolio\extracted\ezgif-frame-003.jpg')
person_crop_col = img3.crop((440, 370, 1480, 1050))
arr_col = np.array(person_crop_col)

# We use the EXACT same mask so B&W and Color align pixel-perfect!
rgba_col = np.dstack([arr_col, mask_arr])
img_col = Image.fromarray(rgba_col, mode='RGBA')
img_col.save(os.path.join(OUTPUT_DIR, 'portrait-color.png'))
print('Saved portrait-color.png')

# 3. AVATAR (Face cutout for footer / pills)
avatar = img25.crop((820, 420, 1100, 700))
avatar.save(os.path.join(OUTPUT_DIR, 'avatar.png'))
print('Saved avatar.png')

# 4. PROJECT THUMBNAILS
# BloomCare: Frame 35
img35 = Image.open(r'd:\portfolio\extracted\ezgif-frame-035.jpg')
bloom = img35.crop((352, 318, 912, 690))
bloom.save(os.path.join(OUTPUT_DIR, 'bloomcare.png'))

# FragWater: From Frame 79 (cleanest, sharpest view of FragWater layout)
img79 = Image.open(r'd:\portfolio\extracted\ezgif-frame-079.jpg')
frag = img79.crop((360, 455, 1550, 1075)).resize((560, 372), Image.Resampling.LANCZOS)
frag.save(os.path.join(OUTPUT_DIR, 'fragwater.png'))

# CryptoCalm: Frame 38
img38 = Image.open(r'd:\portfolio\extracted\ezgif-frame-038.jpg')
crypto = img38.crop((352, 126, 912, 498))
crypto.save(os.path.join(OUTPUT_DIR, 'cryptocalm.png'))

# Spenso: Frame 38
spenso = img38.crop((984, 126, 1544, 498))
spenso.save(os.path.join(OUTPUT_DIR, 'spenso.png'))
print('Saved project thumbnails!')

# 5. SERVICE PREVIEW (Frame 48)
img48 = Image.open(r'd:\portfolio\extracted\ezgif-frame-048.jpg')
serv = img48.crop((972, 126, 1400, 436))
serv.save(os.path.join(OUTPUT_DIR, 'service-preview.png'))

# 6. EXPERIENCE PREVIEW (Frame 60)
img60 = Image.open(r'd:\portfolio\extracted\ezgif-frame-060.jpg')
exp = img60.crop((1290, 168, 1690, 448))
exp.save(os.path.join(OUTPUT_DIR, 'experience-preview.png'))
print('Saved service and experience previews!')

# 7. CLOUDS BACKGROUND (Frame 68 / 85)
img68 = Image.open(r'd:\portfolio\extracted\ezgif-frame-068.jpg')
clouds = img68.crop((160, 0, 1735, 1080))
clouds.save(os.path.join(OUTPUT_DIR, 'clouds-bg.jpg'))
print('Saved clouds-bg.jpg')

# 8. CASE STUDY DETAIL SCREENSHOTS
img78 = Image.open(r'd:\portfolio\extracted\ezgif-frame-078.jpg')
img80 = Image.open(r'd:\portfolio\extracted\ezgif-frame-080.jpg')
img82 = Image.open(r'd:\portfolio\extracted\ezgif-frame-082.jpg')

# FragWater Case Study Detail 1: Top full screenshot
case1 = img78.crop((350, 765, 1550, 1080))
case1.save(os.path.join(OUTPUT_DIR, 'case-screenshot-1.png'))

# FragWater Case Study Detail 2: Mid screenshot (frame 80)
case2 = img80.crop((350, 36, 1550, 335))
case2.save(os.path.join(OUTPUT_DIR, 'case-screenshot-2.png'))

# FragWater Case Study Detail 3: Perfume product showcase (frame 80 bottom)
case3 = img80.crop((350, 620, 1550, 1080))
case3.save(os.path.join(OUTPUT_DIR, 'case-screenshot-3.png'))

# FragWater Feature Banner (frame 82)
feat_bg = img82.crop((350, 38, 1550, 715))
feat_bg.save(os.path.join(OUTPUT_DIR, 'case-features-banner.png'))
print('Saved case study assets!')
