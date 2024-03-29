const { src, dest } = require('gulp');

// Image Compression
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

//File paths
const DIST_PATH = 'dist';
const IMAGES_PATH = 'src/images/png-jpg/*.{png,jpeg,jpg,svg,gif,ico,,webp,xml,jason}';

// Images
function imagesFn() {
  return src(IMAGES_PATH)
    .pipe(imagemin(
      [
        imagemin.mozjpeg(),
        imagemin.optipng(),
        imagemin.svgo(),
        imageminPngquant(),
        imageminJpegRecompress()
      ]
    ))
    .pipe(dest(DIST_PATH + '/images'));
}

exports.build = imagesFn;
