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
