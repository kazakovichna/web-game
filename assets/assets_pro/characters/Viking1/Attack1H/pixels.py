from PIL import Image

def Merge(imgs):
    n = len(imgs)
    b_size = imgs[0].size
    size = (b_size[0] * n, b_size[1])
    img = Image.new('RGBA', size)
    
    for i in range(len(imgs)):
        img.paste(imgs[i], (i * b_size[0], 0))
    
    img.save('merge.png', 'PNG')

def Thumbnail(name, size = (32, 48)):
    im = Image.open(name)
    im.thumbnail(size)
    return im

imgs = []
count = 9

for i in range(count + 1):
    imgs.append(Thumbnail(str(i) + '.png'))
    
#for i in range(count + 1):
#    imgs.append(Image.open(str(i) + '.png'))
    
Merge(imgs)
