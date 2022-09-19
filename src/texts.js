import {xoxoIntro, chatboxIntro} from './assets';

const Texts = [
    {
        logo:'XOXO',
        id:'xoxo',
        navbar: {
            first:'Panel',
            second:'Menu',
            third:'About'
        },
        header: {
            left: {
                title:'x'
            },
            right: {
                above:'Google Fonts is a library of 1,451 open source font families and APIs for convenient use via CSS and Android.The library also has delightful and beautifully crafted icons for common actions and items.Download them for use in your digital products for Android, iOS, and web.',
                below:'Google Fonts is a library of 1,451 open source font families and APIs for convenient use via CSS and Android.',
                context:'Discover new web Application'
            }
        },
        sign : {
            in:'SignIn',
            up:'SignUp'
        },
        source: {
            legend:'Introduction',
            field:'Google Fonts is a library of 1,451 open source font families and APIs for convenient use via CSS and Android.The library also has delightful and beautifully crafted icons for common actions and items.Download them for use in your digital products for Android, iOS, and web'
        },
        intro: {
            left: {
                img:{
                    src:xoxoIntro,
                    id:'xoxo-intro'
                },
                subtitle: {
                    id:'intro-subtitle',
                    content:'The PlayStation 4 (PS4) is a home video game console developed by Sony Computer Entertainment. Announced as the successor to the PlayStation 3 in February 2013, it was launched on November 15, 2013, in North America, November 29, 2013 in Europe, South America and Australia, and on February 22, 2014 in Japan.'
                }
            },
            right: {
                img : {
                    id:'chatbox-intro',
                    src:chatboxIntro
                },
                content:'Explore New design Chatbox'
            }
        },
        signin: {
            signupLink:'Create an Account'
        }
    }
];

export default Texts