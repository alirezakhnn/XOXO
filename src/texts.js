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
        },
        privacy: {
            context_first:'The short story is a crafted form in its own right. Short stories make use of plot, resonance, and other dynamic components as in a novel, but typically to a lesser degree.',
            context_second:' The short story is a crafted form in its own right. Short stories make use of plot, resonance, and other dynamic components as in a novel, but typically to a lesser degree. While the short story is largely distinct from the novel or novella/short novel, authors generally draw from a common pool of literary techniques.[citation needed] The short story is sometimes referred to as a genre.[1]Determining what exactly defines a short story has been recurrently problematic.[2] A classic definition of a short story is that one should be able to read it in one sitting, a point most notably made in Edgar Allan Poes essay "The Philosophy of Composition" (1846).[3] H.G. Wells described the purpose of the short story as "The jolly art, of making something very bright and moving; it may be horrible or pathetic or funny or profoundly illuminating, having only this essential, that it should take from fifteen to fifty minutes to read aloud.”'
        }
    }
];

export default Texts