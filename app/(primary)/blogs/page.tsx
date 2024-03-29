import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { getAllBlog, getAllCategory } from "@/app/utils/blogDataFetch";

export const metadata: Metadata = {
  title: "Blogs | Quick Dev Interview Preparation",
  description: "Generated by create next app"
};

type FormDataType = {
  _id: string;
  slug: string,
  user: string;
  title: string;
  shortDescription: string;
  image: string;
  description: string;
  isPublished: boolean;
  topNews: boolean;
  topOthers: boolean;
  tag: string;
  popular: boolean;
  category: string;
  categoryName: string;
  createdAt: string
};

type propsType = {
  blogs: FormDataType[];
};

const page = async () => {
  const blogs = await getAllBlog();
  const category = await getAllCategory();
  const recent: FormDataType[] = [];
  const popular: FormDataType[] = [];
  const top: FormDataType[] = [];
  let main = {
    _id: "",
    slug: "",
    user: "",
    title: "",
    shortDescription: "",
    image: "",
    description: "",
    isPublished: false,
    topNews: false,
    topOthers: false,
    tag: "",
    popular: false,
    category: "",
    categoryName: "",
    createdAt: ""
  };

  if (blogs) {
    blogs.forEach((item, index) => {
      if (index < 3) {
        recent.push(item);
      }
      if (item.popular) {
        popular.push(item);
      }
      if (item.topNews) {
        top.push(item);
      }
      if (item.topNews) {
        main = item;
      }
    });
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Essential Tech Blogs and Expert Insights
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Discover a wealth of curated tech blogs, tips, and insights to
              empower your tech journey. Maximize productivity and embrace
              innovation with Tech Toolbox.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {category.map((item) => (
              <div
                key={item._id}
                className="p-4 md:w-1/3 flex flex-col text-center items-center"
              >
                <div className="w-8/12 sm:w-7/12 px-4 inline-flex items-center justify-center mb-5">
                  <Image
                    src={item.image}
                    alt="Category Image"
                    height={200}
                    width={200}
                    className="shadow-lg rounded-md max-w-full h-auto align-middle border-none"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    {item.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {item.description}
                  </p>
                  <Link
                    href={`blogs/category/${item.slug}`}
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mt-6">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                🌟 Best of Tech: Top Picks! 📚
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Discover the hottest picks! Get inspired by the most popular and trending posts. Stay ahead in the tech world with our best content. Happy reading! 📚💡
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-48 overflow-hidden">
                  {main?.image ? (
                    <Image
                      src={main.image}
                      alt={main.title}
                      width={300}
                      height={300}
                    />
                  ) : null}
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  {main.title}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  {main.shortDescription.slice(0, 150)}
                </p>
                <Link
                  href={`/blogs/details/${main.slug}`}
                  className="text-indigo-500 inline-flex items-center mt-3"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

              {top.map((item) => (
                <div key={item._id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-48 overflow-hidden">
                    {item?.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={300}
                      />
                    ) : null}
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                    {item.title}
                  </h2>
                  <p className="text-base leading-relaxed mt-2">
                    {item.shortDescription.slice(0, 150)}
                  </p>
                  <Link
                    href={`/blogs/details/${item.slug}`}
                    className="text-indigo-500 inline-flex items-center mt-3"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>


        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-xl px-4 md:px-8 mx-auto">

    <div className="mb-10 md:mb-16">
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">🆕 Latest Blogs: Fresh Insights! 📝</h2>

      <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Explore our latest posts for the most current tech insights. Level up your knowledge and stay ahead in the tech world. Happy reading! 💡📚</p>
    </div>

    {recent.map((item) => (
    <div key={item._id} className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">

      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
        <a href="#" className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <Image src={item.image} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" height={300} width={300} />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-gray-400 text-sm">{item.createdAt &&
                    new Date(item.createdAt).toLocaleDateString()}</span>

          <h2 className="text-gray-800 text-xl font-bold">
            <Link href={`/blogs/details/${item.slug}`} className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{item.title}</Link>
          </h2>

          <p className="text-gray-500">{item.shortDescription.slice(0,100)}</p>

          <div>
            <Link href={`/blogs/details/${item.slug}`} className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">Read more</Link>
          </div>
        </div>
      </div>

    </div>
    ))}
  </div>
</div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                🚀 Trending Tech Blogs! 🌟
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Discover the hottest reads! Explore our most popular posts that are making waves in the tech community. Stay informed and inspired with the top trending content. Happy exploring! 📚💡
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {popular.map((item) => (
                <div key={item._id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-48 overflow-hidden">
                    {item?.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={300}
                      />
                    ) : null}
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                    {item.title}
                  </h2>
                  <p className="text-base leading-relaxed mt-2">
                    {item.shortDescription.slice(0, 150)}
                  </p>
                  <Link
                    href={`/blogs/details/${item.slug}`}
                    className="text-indigo-500 inline-flex items-center mt-3"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
