#!/bin/bash


# "svgo:hero": "svgo --pretty -i docs/images/svg/rawgenius_2024_4.svg -o docs/images/svg/rawgenius_2024_4.min.svg",
# "svgo:fake": "svgo cleanupIDs:true emoveHiddenElems:false removeEmptyContainers:false --pretty -i docs/images/svg/fake.svg -o docs/images/svg/fake.min.svg",
# "imageoptim": "open -a ImageOptim docs/images/*.png",
# "imageoptim2": "/Applications/ImageOptim.app/Contents/MacOS/ImageOptim  docs/images/*.png",
# "test": "echo \"Error: no test specified\" && exit 1"

# logo
svgo --pretty -i src/assets/images/logo/logo.svg -o src/assets/images/logo/logo.min.svg

# rawgenius hero
svgo --pretty -i src/assets/images/logo/rawgenius_logo_2024_rawgenius_2024_16_9.svg -o src/assets/images/logo/rawgenius_logo_2024_rawgenius_2024_16_9.min.svg


# rawgenius 2024 logo
svgo --pretty -i src/assets/images/logo/rawgenius_logo_2024.svg -o src/assets/images/logo/rawgenius_logo_2024.min.svg


