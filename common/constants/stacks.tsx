import {
  SiBookstack,
  SiGoogleclassroom,
  SiNotion,
  SiCanva,
  SiZoom,
  SiTrello,
  SiGoogledocs,
  SiGoogleforms,
  SiGrammarly,
  SiKahoot,
  SiDuolingo,
  SiPrezi,
  SiSlack
} from "react-icons/si";

import {
  FaChalkboardTeacher,
  FaBookReader,
  FaChild,
  FaMicrophoneAlt,
  FaPencilAlt,
  FaLanguage,
  FaPaintBrush,
  FaUsersCog,
  FaLightbulb,
  FaHeart,
  FaHandsHelping
} from "react-icons/fa";

export type SkillProps = {
  [key: string]: JSX.Element;
};

const iconSize = 22;

export const STACKS: SkillProps = {
  "TEFL / EYL": <FaLanguage size={iconSize} className="text-indigo-600" />,
  "Phonics Instruction": <FaBookReader size={iconSize} className="text-orange-600" />,
  "Storytelling": <FaChild size={iconSize} className="text-pink-500" />,
  "Lesson Planning": <SiNotion size={iconSize} className="text-gray-800" />,
  "Classroom Management": <FaChalkboardTeacher size={iconSize} className="text-green-700" />,
  "Speaking Activities": <FaMicrophoneAlt size={iconSize} className="text-rose-500" />,
  "Writing Practice": <FaPencilAlt size={iconSize} className="text-yellow-600" />,
  "Game-Based Learning": <SiKahoot size={iconSize} className="text-purple-600" />,
  "Assessment Tools": <SiGoogleforms size={iconSize} className="text-green-500" />,
  "Google Docs": <SiGoogledocs size={iconSize} className="text-blue-500" />,
  "Canva for Worksheets": <SiCanva size={iconSize} className="text-cyan-400" />,
  "Grammarly": <SiGrammarly size={iconSize} className="text-green-600" />,
  "Duolingo": <SiDuolingo size={iconSize} className="text-green-500" />,
  "Zoom Teaching": <SiZoom size={iconSize} className="text-blue-400" />,
  "Google Classroom": <SiGoogleclassroom size={iconSize} className="text-green-700" />,
  "Reading Instruction": <SiBookstack size={iconSize} className="text-red-500" />,
  "Art Integration": <FaPaintBrush size={iconSize} className="text-pink-400" />,
  "Collaborative Learning": <FaUsersCog size={iconSize} className="text-amber-600" />,
  "Critical Thinking": <FaLightbulb size={iconSize} className="text-yellow-500" />,
  "Social-Emotional Learning": <FaHeart size={iconSize} className="text-rose-600" />,
  "Peer Mentorship": <FaHandsHelping size={iconSize} className="text-blue-600" />,
  "Prezi for Presentations": <SiPrezi size={iconSize} className="text-sky-500" />,
  "Slack for Communication": <SiSlack size={iconSize} className="text-purple-500" />,
};
