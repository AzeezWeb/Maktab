import { PiUsersThreeLight } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { SlBookOpen } from "react-icons/sl";
import { BiDetail } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentConfig } from "react-icons/gr";
import UzbIcon from './../icons/uzb.svg'
import EngIcon from './../icons/eng.svg'
import RusIcon from './../icons/rus.svg'



export  const sidebarItems = [
  {
    name: "sidebar_title_1",
    icon: PiUsersThreeLight,
    link: 'classes',
  },
  {
    name: "sidebar_title_2",
    icon: LiaChalkboardTeacherSolid,
    link: 'teachers',
  },
  {
    name: "sidebar_title_3",
    icon: CiUser,
    link:'students',
  },
  {
    name: "sidebar_title_4",
    icon: SlBookOpen,
    link: 'sciences',
  },
  {
    name: "sidebar_title_5",
    icon: BiDetail,
    link: 'lessonSchedule',
  },
  {
    name: "sidebar_title_6",
    icon: IoDocumentTextOutline,
    link: 'journal',
  },
  {
    name: "sidebar_title_7",
    icon: GrDocumentConfig,
    link: 'kpi',
  },
]


export const language = [
	{ nativeLng: "O'zbek", lng: 'uz', icon: UzbIcon },
	{ nativeLng: 'English', lng: 'en', icon: EngIcon },
	{ nativeLng: 'Русский', lng: 'ru', icon: RusIcon },
];