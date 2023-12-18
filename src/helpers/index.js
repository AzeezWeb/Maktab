import { PiUsersThreeLight } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { SlBookOpen } from "react-icons/sl";
import { BiDetail } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentConfig } from "react-icons/gr";

export  const sidebarItems = [
  {
    name: 'Sinflar',
    icon: PiUsersThreeLight,
    link: 'classes',
  },
  {
    name: "O'qituvchilar",
    icon: LiaChalkboardTeacherSolid,
    link: 'teachers',
  },
  {
    name: "O'quvchilar",
    icon: CiUser,
    link:'students',
  },
  {
    name: 'Fanlar',
    icon: SlBookOpen,
    link: 'sciences',
  },
  {
    name: 'Dars jadval',
    icon: BiDetail,
    link: 'lessonSchedule',
  },
  {
    name: 'Jurnal',
    icon: IoDocumentTextOutline,
    link: 'journal',
  },
  {
    name: 'KPI',
    icon: GrDocumentConfig,
    link: 'kpi',
  },
]