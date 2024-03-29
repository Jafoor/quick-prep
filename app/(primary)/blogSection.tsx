import Link from "next/link";
import Image from "next/image";

type FormDataType = {
  _id: string;
  slug: string;
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
};

type ResourceType = {
  resourcePosts: FormDataType[];
  blogPosts: FormDataType[];
};

const BlogSection = ({ resourcePosts, blogPosts }: ResourceType) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Tech Resources and Insights
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            The gateway to the vast universe of technology and beyond. Unleash
            your curiosity and embark on an exciting journey through the
            ever-evolving realm of tech with us!
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {resourcePosts.map((item) => (
            <article
              key={item._id}
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  {item.categoryName}
                </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link href={`/resources/details/${item.slug}`}>
                  {item.title}
                </Link>
              </h2>
              <div className="mb-5 font-light text-gray-500 dark:text-gray-400">
                <p>{item.shortDescription.slice(0, 150)}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image
                    className="w-7 h-7 rounded-full"
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                  />
                  <span className="font-medium dark:text-white">Abu Jafor</span>
                </div>
                <Link
                  href={`/resources/details/${item.slug}`}
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}

          {blogPosts.map((item) => (
            <article
              key={item._id}
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  {item.categoryName}
                </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link href={`/blogs/details/${item.slug}`}>{item.title}</Link>
              </h2>
              <div className="mb-5 font-light text-gray-500 dark:text-gray-400">
                <p>{item.shortDescription.slice(0, 150)}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image
                    className="w-7 h-7 rounded-full"
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                  />
                  <span className="font-medium dark:text-white">Abu Jafor</span>
                </div>
                <Link
                  href={`/blogs/details/${item.slug}`}
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
