import { PiUsersThreeLight } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { SlBookOpen } from "react-icons/sl";
import { BiDetail } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentConfig } from "react-icons/gr";

export  const sidebarItems = [
  {
    link: 'Sinflar',
    icon: PiUsersThreeLight,
  },
  {
    link: "O'qituvchilar",
    icon: LiaChalkboardTeacherSolid,
  },
  {
    link: "O'quvchilar",
    icon: CiUser,
  },
  {
    link: 'Fanlar',
    icon: SlBookOpen,
  },
  {
    link: 'Dars jadval',
    icon: BiDetail,
  },
  {
    link: 'Jurnal',
    icon: IoDocumentTextOutline,
  },
  {
    link: 'KPI',
    icon: GrDocumentConfig,
  },
]