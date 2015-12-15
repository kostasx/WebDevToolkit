# ImageMagick

ImageMagick is a code library that can do loads of different operations and 
transformations on image files.

---

#### LIST SUPPORTED FORMATS

`identify -list format`

`convert -list configure | grep DELEGATES`

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

#### PDF TO JPEG CONVERSION

`convert abc.pdf abc.jpg`

`convert *.pdf test.jpg`

```
for file in `ls *.pdf`; do convert $file `echo $file | sed 's/\.pdf$/\.jpg/'`; done
```

### JPEG TO PDF CONVERSION

`convert files.jpg file.pdf`

`convert *.jpg file.pdf`

`convert yourjpgfiles1.jpg yourjpgfiles2.jpg yourjpgfiles3.jpg yournewfile.pdf`

__Compress PDF__ (Needs: GhostScript)

`gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf`

#### CREATE A CSS SPRITE (tile ROWS x COLUMNS)

```
for i in `seq -f "%04g" 0 1 30`; do montage -geometry +0+0 -tile 2x1 sprite.png mac$i.png sprite.png; done
```

#### CONVERT ANIMATED GIF TO NON-TRANSPARENT FRAMES

`convert -coalesce input.gif output_%03d.png`

#### CONVERT TO GRAYSCALE:

`convert input.png -colorspace gray output.png`

`convert input.png -channel RGBA -matte -colorspace gray output.png`

#### CREATE MPEG FROM JPEG FILES (Requires MPEG delegate)

`convert *.jpg file.mpg (for mpeg-1)`

`convert *.jpg file.m2v (for mpeg-2)`

`convert -adjoin file1.jpg file2.jpg file3.jpg movie.mpeg`

#### ADD COMMENT

`mogrify -comment "test" file.png`

#### READ COMMENT

`identify -verbose file.png | grep "Comment:"`

### ADD COMMENT TO MULTIPLE FILES

`for file in *.png ; do mogrify -comment "test" "$file"; done`
