import { useState } from "react";
import ReactPaginate from "react-paginate";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";

export default function Home() {
  const [items] = useState(data.slice(0));
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 8;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((product) => {
      return (
        <div key={product.id} >
          <ProductItem key={product.id} product={product} ></ProductItem>
        </div>
      );
    });

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-4   ">
        {displayItems}
      </div>
      <ReactPaginate
        className={"flex justify-center space-x-30 p-6 sticky sm:space-x-10 sm:p-10"}
        pageCount={pageCount}
        onPageChange={changePage}
        previousLinkClassName={"rounded bg-blue-500 py-2 px-4 shadow outline-none "}
        pageLinkClassName	={"rounded bg-blue-500 py-2 px-4 shadow outline-none "}
        nextLinkClassName={"rounded bg-blue-500 py-2 px-4 shadow outline-none "}
        activeLinkClassName={"bg-blue-200"}
        
      />
    </Layout>
  );
}
