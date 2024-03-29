/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const User = ({ user: { img, review, position, company, name } }) => {
  return (
    <>
      <section className="md:basis-2/5 p-4 w-10/12 border-2 rounded-lg ">
        <blockquote className="italic font-normal lg:text-lg dark:text-gray-200 text-blue-900">
          {"' "}
          {review}
          {" '"}
        </blockquote>
        <article className="flex sm:flex-row flex-col lg:gap-10 gap-5 lg:py-8 py-2 px-5 ">
          <img src={img} alt="Image" className="w-24 h-24 rounded-full" />
          <article className="flex flex-col gap-2 ">
            <p className="font-bold italic dark:text-gray-200 text-blue-900">
              {name}
            </p>
            <p className="font-bold italic dark:text-gray-200 text-blue-900">
              {position} at {company}
            </p>
          </article>
        </article>
      </section>
    </>
  );
};
