# HughesyHugh.github.io

## About

_HughesyHugh.github.io_ will my personal site and a directory of my projects as I progress with self-study.

#### Make-up

Content/Display:  HTML / CSS

Task-runner:	  Gulp.JS

CSS Processor	  PostCSS

Plugins:	  	  postcss-watch 
				  postcss-nested
				  postcss-import
				  postcss-simple-vars
				  autoprefixer
				  normalize.css

#### Overview

index.html links to an external stylesheet in the `prod` directory. 

That stylesheet draws its code from another styles.css file which only comprises @import rules. Theses rules combine the CSS file modules that have singular purpose (i.e. button-specific styling / header-specific styling).