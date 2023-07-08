/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['cdn.imagin.studio',"cars-hub-nextjs.vercel.app"]
    },
    typescript:{
        ignoreBuildErrors:true,
    }
}

module.exports = nextConfig