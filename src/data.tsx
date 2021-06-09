import { TreeData } from "./typings";

const data: TreeData = {
  name: "father",
  key: "1",
  type: "folder",
  collapsed: false,
  children: [
    {
      name: "son1",
      key: "1-1",
      type: "folder",
      collapsed: false,
      children: [
        {
          name: "grandSon",
          key: "1-1-1",
          type: "file",
          collapsed: false,
          children: [],
        },
        {
          name: "grandSon2",
          key: "1-1-2",
          type: "file",
          collapsed: false,
          children: [],
        },
      ],
    },
    {
      name: "mother",
      key: "2",
      type: "folder",
      collapsed: false,
      children: [
        {
          name: "son3",
          key: "2-1",
          type: "file",
          collapsed: false,
          children: [],
        }
      ],
    },
    {
      name: "son5",
      key: "3",
      type: "file",
      collapsed: false,
    }
  ],
};

export default data;
