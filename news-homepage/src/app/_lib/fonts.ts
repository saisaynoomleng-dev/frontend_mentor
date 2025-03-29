import localFont from 'next/font/local'

export const inter = localFont({
    src: [
        {
            path: '../fonts/Inter-Regular.ttf',
            style: 'normal',
            weight: '400'
        },
        {
            path: '../fonts/Inter-Bold.ttf',
            style: 'normal',
            weight: '700',
        },
        {
            path: '../fonts/Inter-ExtraBold.ttf',
            style: 'normal',
            weight: '800'
        }
    ],
    variable: '--font-inter'
})