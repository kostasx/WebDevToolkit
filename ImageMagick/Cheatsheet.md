# ImageMagick

ImageMagick is a code library that can do loads of different operations and 
transformations on image files.

---

#### CONVERT JPEG IMAGE FILE TO PROGRESSIVE ENHANCEMENT

`convert -strip -interlace Plane -quality 80 input-file.jpg output-file.jpg`

#### CONVERT MULTIPLE JPEG IMAGE FILES TO PROGRESSIVE ENHANCEMENT

`for i in ./*.jpg; do convert -strip -interlace Plane -quality 80 $i progressive/$i; done`

#### DETECT PROGRESSIVE JPG IMAGES

`for i in ./*.jpg; do echo "Checking ${i}" && identify -verbose $i | grep Interlace; done`

#### GRAB FIRST FRAMES FROM ANIMATED GIF

`convert 'image.gif[0]' output.gif`

#### BLUR AN IMAGE

`convert events.jpg -blur 0x16 events_blur.jpg`

#### DOWNSCALE AN ANIMATED GIF 

```
convert do.gif -coalesce temporary.gif
convert -size <original size> temporary.gif -resize 24x24 smaller.gif
convert temporary.gif -resize 24x24 smaller.gif
```

#### IMAGE RESIZE

`convert input.jpg -resize 800x600 -quality 95 output.jpg`

`convert input.jpg -resize 50% output.jpg`

