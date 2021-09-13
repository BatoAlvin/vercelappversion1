import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import slack from "../../public/slack.png";
import Image from "next/image";

// export const admin = [
//     {
//         list: "View all jobs",
//         link:"/admin_view_all_opportunities/admin"
//     },
//     {
//         list: "View all applicants",
//         link:"/admin_view_all_Job_applicants/admin"
//     },
//     {
//         list: "View all profiles",
//         link:"/admin_view_all_profiles/admin"
//     },
   
// ] 
export const lms = [
    {
        list: "My Class",
        link:"/myClass/classwork",
        icon: <PeopleIcon style = {{fill: '#41AD48'}}/>
    },
    {
        list: "Slack",
        link:"/messages",
        icon: <Image
         src={slack}
          alt="slack icon"
         width={25}
        height={20}
         />
    }
] 
// export const opportunity = [
//     {
//         list: "View all jobs",
//         link:"/"
//     },
//     {
//         list: "Full Stack",
//         link:"/"
//     },
//     {
//         list: "Front end",
//         link:"/"
//     },
//     {
//         list: "Back end",
//         link:"/"
//     },
//     {
//         list: "Dev Ops",
//         link:"/"
//     },
// ]