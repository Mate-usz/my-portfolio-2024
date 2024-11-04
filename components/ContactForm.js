export default function ContactForm() {
  return (
    <section className="p-6">
      <form>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-600 rounded-lg dark:text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-600 rounded-lg dark:text-black"
          />
          <textarea
            placeholder="Message"
            className="p-2 col-span-2 border w-full border-gray-600 rounded-lg dark:text-black"
          ></textarea>
        </div>
        <button className="mt-4 text-white bg-gray-700 dark:text-black dark:bg-gray-200 w-full px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
