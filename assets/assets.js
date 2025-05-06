import api_icon from './api-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import arrow_icon from './arrow-icon.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import code_icon_dark from './code-icon-dark.png';
import code_icon from './code-icon.png';
import database_icon from './database-icon.png';
import download_icon from './download-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import edu_icon from './edu-icon.png';
import figma from './figma.png';
import firebase from './firebase.png';
import git from './git.png';
import github from './github.png';
import graphics_icon from './graphics-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import mobile_icon from './mobile-icon.png';
import mongodb from './mongodb.png';
import moon_icon from './moon_icon.png';
import mysql from './mysql.png';
import postman from './postman.png';
import profile_img from './profile-img.png';
import project_icon_dark from './project-icon-dark.png';
import project_icon from './project-icon.png';
import react_icon from './react-icon.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_white from './right-arrow-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import sun_icon from './sun_icon.png';
import ui_icon from './ui-icon.png';
import user_image from './user-image.png';
import vscode from './vscode.png';
import web_icon from './web-icon.png';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    github,
    postman,
    mysql,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    api_icon,
    database_icon,
    react_icon
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Full Stack MERN Development', description: 'I develop scalable and efficient web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), delivering high-performance solutions tailored to your business requirements....', link: '' },

    { icon: assets.api_icon, title: 'Custom API Development & Integration', description: 'I create and integrate RESTful APIs using Node.js and Express.js, enabling seamless communication between your frontend and backend systems...', link: '' },

    { icon: assets.database_icon, title: 'Database Management with MongoDB', description: 'I design and manage NoSQL databases using MongoDB, ensuring secure, optimized, and scalable data storage solutions for your applications...', link: '' },
 
    { icon: assets.react_icon, title: 'Responsive and Dynamic Frontend with React.js', description: 'I build modern, interactive, and responsive user interfaces using React.js, ensuring a smooth and engaging experience across all devices...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML/CSS, JavaScript, React Js, Node Js, Express Js, BootStrap, Java,JDBC, springBoot, MongoDB, mySql, postgresql, Git & GitHub, postman' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of science in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.github,assets.mongodb, assets.postman, assets.git,assets.mysql
];