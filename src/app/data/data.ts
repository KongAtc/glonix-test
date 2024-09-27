type Course = {
  id: number;
  title: string;
  description: string;
  backgroundUrl: string;
  backgroundColor: string;
  author: {
    imageUrl: string;
    name: string;
    detail: string;
  };
  type?: string;
};

type Category = {
  id: number;
  title: string;
  logoUrl: string;
  description: string;
};

type MyCourse = {
  id: number;
  title: string;
  description: string;
  backgroundUrl: string;
  progress: number;
};

type Blog = {
  id: number;
  title: string;
  type: string;
  subtitle: string;
  detail: string;
  publishedAt: string;
  viewer: number;
  backgroundUrl: string;
};

export const TITLE_COURSE: Course[] = [
  {
    id: 1,
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    description: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    backgroundUrl: "Rectangle 2.png",
    backgroundColor: "#002E2A",
    author: {
      name: "ณัฐกานต์ สิทธิชัยอนันต์",
      detail: "CEO Y.I.M Corporation",
      imageUrl: "/Ellipse 2.png",
    },
  },
  {
    id: 2,
    title: "Generative ChatGPT: UX Design Edition",
    description: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    backgroundUrl: "Rectangle 3.png",
    backgroundColor: "#95FFE5",
    author: {
      name: "ณัฐกานต์ สิทธิชัยอนันต์",
      detail: "CEO Y.I.M Corporation",
      imageUrl: "/Ellipse 3.png",
    },
  },
  {
    id: 3,
    title: "UX Accelerator Bundle",
    description: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    backgroundUrl: "Rectangle 9.png",
    backgroundColor: "#FCFF8B",
    author: {
      name: "ณัฐกานต์ สิทธิชัยอนันต์",
      detail: "CEO Y.I.M Corporation",
      imageUrl: "/Ellipse 4.png",
    },
  },
];

export const COURSE_CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Data",
    description: "เรียนรู้และฝึกฝนกระบวนการคิดสร้างมูลค่าให้ธุรกิจด้วยข้อมูล",
    logoUrl: "hierarchy-2.png",
  },
  {
    id: 2,
    title: "Science",
    description: "เรียนรู้และฝึกฝนกระบวนการคิดด้วยกระบวนการทางวิทยาศาสตร์",
    logoUrl: "glass.png",
  },
  {
    id: 3,
    title: "Tech",
    description: "พร้อมเป็นที่ต้องการของตลาดแรงงานด้วยทักษะการเขียนโปรแกรม",
    logoUrl: "cloud-connection.png",
  },
  {
    id: 4,
    title: "Business",
    description:
      "พลิกโฉมธุรกิจในยุคดิจิทัลด้วยการเข้าถึงลูกค้าในช่องทางและเวลาที่เหมาะ",
    logoUrl: "book.png",
  },
];

export const MY_COURSES: MyCourse[] = [
  {
    id: 1,
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    description: "Generative AI  and ChatGPT: Design Thinking  Edition",
    backgroundUrl: "my-course-1.png",
    progress: 0,
  },
  {
    id: 2,
    title: "Generative ChatGPT: UX  Design Edition",
    description: "Generative ChatGPT: UX  Design Edition",
    backgroundUrl: "my-course-2.png",
    progress: 10,
  },
  {
    id: 3,
    title: "เทคนิคการจัดทำบัญชี จัดการภาษีด้วยเทคโนโลยีดิจิทัล",
    description: "เทคนิคการจัดทำบัญชี จัดการภาษีด้วยเทคโนโลยีดิจิทัล",
    backgroundUrl: "my-course-3.png",
    progress: 40,
  },
  {
    id: 4,
    title: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
    description: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
    backgroundUrl: "my-course-4.png",
    progress: 80,
  },
];

export const ONLINE_COURSES: Course[] = [
  {
    id: 1,
    title: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัยพื้นฐาน",
    description: "รู้และเข้าใจปัจจัยที่ส่งผลกระทบต่อราคาหุ้น",
    backgroundUrl: "/Group 51.png",
    backgroundColor: "#002E2A",
    author: {
      name: "ณัฐกานต์ สิทธิชัยอนันต์",
      detail: "CEO Y.I.M Corporation",
      imageUrl: "/Ellipse 1.png",
    },
    type: "Business",
  },
  {
    id: 2,
    title: "Progressive Web Application",
    description:
      "การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web Application (PWA)",
    backgroundUrl: "/Group 52.png",
    backgroundColor: "#95FFE5",
    author: {
      name: "ปัญจมพงศ์ เสริมสวัสดิ์ศรี",
      detail: "Google Developers",
      imageUrl: "/Ellipse 2.png",
    },
    type: "Data",
  },
  {
    id: 3,
    title: "React Hooks in Action",
    description: "เรียนรู้การเขียน React Hooks แบบ Best Practice",
    backgroundUrl: "/Group 54.png",
    backgroundColor: "#FCFF8B",
    author: {
      name: "วรัทธน์ วงศ์มณีกิจ",
      detail: "Co-Founder",
      imageUrl: "/Ellipse 3.png",
    },
    type: "Science",
  },
  {
    id: 4,
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    description: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    backgroundUrl: "/Group 53.png",
    backgroundColor: "#FCFF8B",
    author: {
      name: "ทัศน์พล รัชตะสัมฤทธิ์",
      detail: "Software Engineer",
      imageUrl: "/Ellipse 4.png",
    },
    type: "Tech",
  },
];

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: "PROFIT / LOSS OF STOCKS IN THE PORTFOLIO",
    type: "Business",
    subtitle: "กำไร/ขาดทุนของหุ้นในพอร์ตต้องดูอย่างไร?",
    detail:
      "เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้คือการติดตามดูข้อมูลของหุ้นในพอร์ตว่าตอนนี้ทำไรได้หรือขาดทุนมากน้อยเท่าใด?",
    publishedAt: "29 กรกฎาคม 2023",
    viewer: 240,
    backgroundUrl: "/Group 60.png", // Replace with actual URL or file path
  },
  {
    id: 2,
    title: "WHAT IS A DATA ENGINEER",
    type: "Data",
    subtitle: "Data Engineer คืออะไร?",
    detail:
      "Data Engineer คือคนที่ทำงานกับหลากหลายเครื่องมือเพื่อรวบรวมข้อมูลจัดการข้อมูลและเปลี่ยนข้อมูลดิบให้พร้อมใช้งานสำหรับนัก Data Scientist และ Data Analyst",
    publishedAt: "29 กรกฎาคม 2023",
    viewer: 240,
    backgroundUrl: "/Group 61.png", // Replace with actual URL or file path
  },
  {
    id: 3,
    title: "สารแทนน้ำตาลไม่อันตราย",
    type: "Science",
    subtitle: "สารแทนน้ำตาลไม่อันตราย",
    detail:
      "สาเหตุที่องค์กรความปลอดภัยแนะนำดังกล่าวมาจากผลการวิจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล",
    publishedAt: "29 กรกฎาคม 2023",
    viewer: 240,
    backgroundUrl: "/Group 57.png", // Replace with actual URL or file path
  },
  {
    id: 4,
    title: "Data Pipelines With Airflow",
    type: "Tech",
    subtitle: "Data Pipelines with Airflow",
    detail:
      "เรียนรู้การสร้าง End-to-End Data Pipelines โดยใช้ Apache Airflow ตั้งแต่ขั้นข้อมูลง่ายๆ ทำความสะอาด ปรับใช้ในรูปแบบที่เหมาะสม",
    publishedAt: "29 กรกฎาคม 2023",
    viewer: 240,
    backgroundUrl: "/Group 58.png", // Replace with actual URL or file path
  },
  {
    id: 5,
    title: "ร่างกายสามารถย้อนวัย “อายุชีวภาพ”",
    type: "Science",
    subtitle: "ร่างกายสามารถย้อนวัย “อายุชีวภาพ”",
    detail:
      "ความชราเริ่มต้นหรือการเสื่อมของเซลล์และอวัยวะมนุษย์นั้น จัดกันด้วย 'อายุชีวภาพ' ซึ่งอาจจะแตกต่างจากอายุจริง",
    publishedAt: "29 กรกฎาคม 2023",
    viewer: 240,
    backgroundUrl: "/Group 59.png", // Replace with actual URL or file path
  },
];
