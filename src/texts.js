import {xoxoIntro} from './assets';
import {Tv} from './videos';

// export const Br = () => (
//     <h2 className="left-header-title">A Chatbox <br /> for instant <br /> messages <br /> or something <br /> like that</h2>
// );

const Texts = [
    {
        logo:'XOXO',
        id:'xoxo',
        navbar: {
            first:'Panel',
            second:'Contacts',
            third:'Setting'
        },
        header:{
            title: 'A Chatbox for instant messages or something like that',
            right: {
                above:'Google Fonts is a library of 1,451 open source font families and APIs for convenient use via CSS and Android.The library also has delightful and beautifully crafted icons for common actions and items.Download them for use in your digital products for Android, iOS, and web.',
                below:'Google Fonts is a library of 1,451 open source font families and APIs for convenient use via CSS and Android.',
                context:'Discover new web Application'
            },
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
                    src:Tv
                },
                content:'Explore New design Chatbox'
            }
        },
        signin: {
            signupLink:'Create an Account'
        },
        sign_google : {
            signin:'sign in by google',
            signup:'sign up by google'
        },
        privacy: {
            context_first:'The short story is a crafted form in its own right. Short stories make use of plot, resonance, and other dynamic components as in a novel, but typically to a lesser degree.',
            context_second:' The short story is a crafted form in its own right. Short stories make use of plot, resonance, and other dynamic components as in a novel, but typically to a lesser degree. While the short story is largely distinct from the novel or novella/short novel, authors generally draw from a common pool of literary techniques.[citation needed] The short story is sometimes referred to as a genre.[1]Determining what exactly defines a short story has been recurrently problematic.[2] A classic definition of a short story is that one should be able to read it in one sitting, a point most notably made in Edgar Allan Poes essay "The Philosophy of Composition" (1846).[3] H.G. Wells described the purpose of the short story as "The jolly art, of making something very bright and moving; it may be horrible or pathetic or funny or profoundly illuminating, having only this essential, that it should take from fifteen to fifty minutes to read aloud.”',
            chechbox_1:'agree with policy and privacy',
            checkbox_2:'receive our services of xoxo features'
        },
        panel_label: {
            section1:'username',
            section2:'password',
            section3:'your email'
        },
        getStarted: {
            left: {
                context:'Get start now to prevent missing new features of xoxo and leave old chatboxes method behind, far away; so click on the button and start your journey we promise your it is will be very exciting,Get start now to prevent missing new features of xoxo and leave old chatboxes method behind, far away!'
            }
        },
        brand: {
            rightContext:'this is a new design of a Web Application',
            rightSubcontex:'this is about xoxo, a new design web application which is useful for comminucating to other people around the world; and there is some features on it to feel modern and comfortable either and so, enjoy it alot and we are here to answer'
        },
        listComp: {
            first: {
                title:'Features',
                context:'there is some interesting features about xoxo, don not miss that and start your journey soon'
            },
            second: {
                title:'Source',
                context:'xoxo is open source web application so you can see our source on github right now to make sure we save our users privacy and security'
            },
            third: {
                title:'More Info',
                context:'get more info in github and our contact ways, we are always herer to response to your questions'
            },
            forth: {
                title:'Contact Us',
                context:'contact us ins telegram instagram and specially github to be up to date of xoxo new features'
            }
        },
        contactus: {
            below: {
                context:'Contact us in xoxo.com and keep up to date with our schadules about xoxo and feel modern'
            }
        }
    }
];

export default Texts