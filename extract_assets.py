import os
import glob
from PIL import Image, ImageOps
import numpy as np

os.makedirs(r'd:\portfolio\assets_prepared', exist_ok=True)

# 1. Inspect frame 25 for portrait B&W
# In frame 25 (1920x1080):
# The portrait is in the lower center.
# Let's crop it and make the white background transparent.
img25 = Image.open(r'd:\portfolio\extracted\ezgif-frame-025.jpg')
arr25 = np.array(img25)

# Center is x=960. Head width is roughly ~700-1200.
# Let's crop x: 500 to 1420, y: 340 to 1080
crop_bw = img25.crop((500, 340, 1420, 1080))

# Make white/off-white background transparent
arr_crop_bw = np.array(crop_bw).convert if False else np.array(crop_bw)
# Check white background threshold
r, g, b = arr_crop_bw[:,:,0], arr_crop_bw[:,:,1], arr_crop_bw[:,:,2]
# Background is pure white (255, 255, 255) or close to it (> 250)
mask = (r > 250) & (g > 250) & (b > 250)

# Create RGBA
rgba_bw = np.dstack([arr_crop_bw, np.where(mask, 0, 255).astype(np.uint8)])
# Let's soften edge: smooth alpha transition
from PIL import ImageFilter
alpha_im = Image.fromarray((~mask).astype(np.uint8) * 255)
# Slight feathering
alpha_im = alpha_im.filter(ImageFilter.GaussianBlur(radius=1.0))
rgba_bw[:, :, 3] = np.array(alpha_im)

img_bw_trans = Image.fromarray(rgba_bw, mode='RGBA')
img_bw_trans.save(r'd:\portfolio\assets_prepared\portrait-bw.png')
print('Saved portrait-bw.png')

# 2. Extract Color portrait with glasses from frame 3 / 5
img3 = Image.open(r'd:\portfolio\extracted\ezgif-frame-003.jpg')
crop_col = img3.crop((500, 340, 1420, 1080))
arr_crop_col = np.array(crop_col)
r_c, g_c, b_c = arr_crop_col[:,:,0], arr_crop_col[:,:,1], arr_crop_col[:,:,2]
mask_c = (r_c > 250) & (g_c > 250) & (b_c > 250)

rgba_col = np.dstack([arr_crop_col, np.where(mask_c, 0, 255).astype(np.uint8)])
alpha_col = Image.fromarray((~mask_c).astype(np.uint8) * 255).filter(ImageFilter.GaussianBlur(radius=1.0))
rgba_col[:, :, 3] = np.array(alpha_col)
img_col_trans = Image.fromarray(rgba_col, mode='RGBA')
img_col_trans.save(r'd:\portfolio\assets_prepared\portrait-color.png')
print('Saved portrait-color.png')

# 3. Avatar: small round crop from frame 25
avatar_crop = img25.crop((800, 400, 1120, 720))
avatar_crop.save(r'd:\portfolio\assets_prepared\avatar.png')
print('Saved avatar.png')

# 4. Project thumbnails:
# BloomCare from frame 35:
# In frame 35:
# Left card thumbnail: x: 350 to 910, y: 315 to 690 (approx)
img35 = Image.open(r'd:\portfolio\extracted\ezgif-frame-035.jpg')
# Let's inspect where the card borders are
print('Processing thumbnails...')
