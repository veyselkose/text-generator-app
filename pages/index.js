import { Inter } from "next/font/google";
import CopyBtn from "@/components/CopyBtn";
import { useSelector, useDispatch } from "react-redux";
import { getParagraph, updateCount, updateIncludeHTML } from "@/store/paragraphSlice";
import { useEffect } from "react";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { text, count, includeHTML, loading } = useSelector((state) => state.paragraph);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getParagraph({ count, includeHTML }));
  }, []);

  return (
    <main className={`${inter.className}`}>
      <div className="container py-5">
        <header className="border-b-2 pb-4">
          <h1 className="text-2xl md:text-3xl font-semibold">Sample Text Generator App</h1>
          <p className="text-sm text-gray-500">choose how many placeholder paragraphs you want</p>
        </header>
        <section className="mt-8">
          <div className="flex w-full md:w-1/2 gap-5">
            <div className="flex flex-col my-2 flex-1">
              <label htmlFor="paragraphCount" className="text-sm font-semibold">
                Paragraphs
              </label>
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                type="number"
                name="paragraphCount"
                id="paragraphCount"
                value={count}
                onChange={(e) => {
                  dispatch(updateCount(e.target.value));
                  dispatch(getParagraph({ count: e.target.value, includeHTML }));
                }}
              />
            </div>
            <div className="flex flex-col my-2 flex-1">
              <label htmlFor="includeHTML" className="text-sm font-semibold">
                include HTML
              </label>
              <select
                name="includeHTML"
                id="includeHTML"
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={includeHTML}
                onChange={(e) => {
                  dispatch(updateIncludeHTML(e.target.value));
                  dispatch(getParagraph({ count, includeHTML: e.target.value }));
                }}
              >
                <option value="text">No</option>
                <option value="html">Yes</option>
              </select>
            </div>
          </div>

          <div
            className="my-2 flex flex-col border group border-gray-300 p-4 rounded-md shadow-sm transition-all hover:text-indigo-500 relative"
            onClick={() => {
              navigator.clipboard.writeText(text);
            }}
          >
            <CopyBtn />
            {loading ? <Loading /> : <p className="mb-4">{text}</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
