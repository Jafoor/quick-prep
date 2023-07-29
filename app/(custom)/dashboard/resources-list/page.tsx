"use client";

import React, { useEffect, useState } from "react";

// import ShowModal from './Modal';
import { useRouter } from "next/navigation";
import Link from "next/link";
const APP_URI = process.env.APP_URI;

type Resource = {
  _id: string;
  title?: string;
  isPublished?: string;
  categoryName?: string;
  createdAt?: string;
};

const Page = () => {
  const [contacts, setContacts] = useState<Resource[]>([]);
  const route = useRouter();

  useEffect(() => {
    async function getContact() {
      try {
        const data = await fetch(`${APP_URI}/api/resource/filter/all-admin`);
        const res = await data.json();

        setContacts(res);
      } catch (error) {
        console.log(error);
      }
    }
    getContact();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`${APP_URI}/api/contact/${id}`, { method: "DELETE" });
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
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Published
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item) => (
            <tr
              key={item._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <Link href={`/dashboard/resources-list/edit/${item._id}`}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.title}
                </th>
              </Link>

              <td className="px-6 py-4">{item.categoryName}</td>
              <td className="px-6 py-4">
                {item.createdAt && new Date(item.createdAt).toLocaleString()}
              </td>
              <td className="px-6 py-4">{item.isPublished ? "Yes" : "No"}</td>
              <td className="px-6 py-4 text-right">
                {/* <ShowModal
                     deleteBtn={() => handleDelete(item._id)}
                     data={item}
                    /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
