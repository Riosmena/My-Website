import { createGlobalStyle } from 'styled-components'

import RobotoMonoRegular from '../Assets/Fonts/RobotoMono-Regular.ttf'
import MontserratSemibold from '../Assets/Fonts/Montserrat-SemiBold.ttf'
import MontserratBold from '../Assets/Fonts/Montserrat-Bold.ttf'

const Typography = createGlobalStyle`
    @font-face {
        font-family: 'RobotoMono-Regular';
        src: url(${RobotoMonoRegular});
    }

    @font-face {
        font-family: 'Montserrat-SemiBold';
        src: url(${MontserratSemibold});
    }

    @font-face {
        font-family: 'Montserrat-Bold';
        src: url(${MontserratBold});
    }

    *, *::before, *::after {
        font-family: 'RobotoMono-Regular';
        color: var(--gray);
    }

    html {
        font-family: 'RobotoMono-Regular';
        color: var(--gray);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat-Bold';
    }
`

export default Typography