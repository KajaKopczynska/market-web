import { styleIcon } from "./styled";
import {BsTwitter, BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs";

export const socials = [
    {
        name: "Twitter",
        url: "https://twitter.com/",
        Icon: styleIcon(BsTwitter),
    },

    {
        name: "Facebook",
        url: "https://pl-pl.facebook.com/",
        Icon: styleIcon(BsFacebook),
    },

    {
        name: "Instagram",
        url: "https://www.instagram.com/",
        Icon: styleIcon(BsInstagram),
    },
    
    {
        name: "YouTube",
        url: "https://www.youtube.com/",
        Icon: styleIcon(BsYoutube),
    },
];