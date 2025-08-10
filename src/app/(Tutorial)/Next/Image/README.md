<!-- @format -->

### Image Optimization

The Next.js < Image > component extends the HTML < img > element to provide:

- Size optimization: Automatically serving correctly sized images for each device, using modern image formats like WebP.
- Visual stability: Preventing layout shift automatically when images are loading.
- Faster page loads: Only loading images when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.
- Asset flexibility: Resizing images on-demand, even images stored on remote servers.

If the image is statically imported, Next.js will automatically determine the intrinsic width and height. These values are used to determine the image ratio and prevent Cumulative Layout Shift while your image is loading.

```javascript
import Image from 'next/image'
import ProfileImage from './profile.png'

export default function Page() {
  return (
    <Image
      src={ProfileImage}
      alt='Picture of the author'
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}
```

`Since Next.js does not have access to remote files during the build process, you'll need to provide the width, height and optional blurDataURL props manually. The width and height are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. Alternatively, you can use the fill property to make the image fill the size of the parent element.`

`To safely allow images from remote servers, you need to define a list of supported URL patterns in next.config.js. Be as specific as possible to prevent malicious usage. For example, the following configuration will only allow images from a specific AWS S3 bucket:`

```javascript
import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
        search: ''
      }
    ]
  }
}

export default config
```
