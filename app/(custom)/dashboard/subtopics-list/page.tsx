"use client";

import React, { useEffect, useState } from "react";

import ShowModal from "./Modal";
import { useRouter } from "next/navigation";

const APP_URI = process.env.APP_URI;

type SubTopic = {
  _id: string;
  title?: string;
  name?: string;
  topDescription?: string;
  shortDescription?: string;
  keywords?: string;
  image?: string;
  createdAt?: string;
  topic?: string;
};

const Page = () => {
  const [subtopics, setSubtopics] = useState<SubTopic[]>([]);
  const route = useRouter();

  useEffect(() => {
    async function getSubTopics() {
      try {
        const data = await fetch(`${APP_URI}/api/subtopics`);
        const res = await data.json();
        setSubtopics(res.topics);
      } catch (error) {
        console.log(error);
      }
    }
    getSubTopics();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`${APP_URI}/api/subtopics/${id}`, { method: "DELETE" });
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              title
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {subtopics.map((item) => (
            <tr
              key={item._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="px-6 py-4">{item.title}</td>
              <td className="px-6 py-4">
                {item.createdAt && new Date(item.createdAt).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-right">
                <ShowModal
                  deleteBtn={() => handleDelete(item._id)}
                  data={item}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
