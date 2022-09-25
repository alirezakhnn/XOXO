    import { 
    SimpleLife,
    john,
    profile_nina,
    SadGirl,
    robert,
} from './assets';


const Users = [
    {
        id:'frier',
        username:'Frier',
        img:SimpleLife,
        subtext:"hello alireza i'm frier, I just wanted to say i wanna go to brazil, so goodbye"
    },
    {
        id:'john',
        username:'John',
        img:john,
        subtext:"hey alireza, here's some information about React..."
    },
    {
        id:'lagertha',
        username:'Lagertha',
        img:SadGirl,
        subtext:"hey lagertha is here to tell you i've just got a new job..."
    },
    {
        id:'robert',
        username:'Robert',
        img:robert,
        subtext:"hey alz, there is a problem here, i need your help; call me as soon as u can..."
    }
];

export const Me = {
    id:'profile_nina',
    username:'Nina',
    img:profile_nina,
}

export default Users