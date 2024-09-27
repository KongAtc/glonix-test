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
};

type Category = {
  id: number;
  title: string;
  logoUrl: string;
  description: string;
};

export const TitleCourses: Course[] = [
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

export const CourseCategories: Category[] = [
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
