import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import { newdata } from "../utils/newdata";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    newdata().then((response) => setItems(response));
  }, []);

  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 8;
  const itemsFullyViewed = pageNumber * itemsPerPage;

  const displayItems = items
    .slice(itemsFullyViewed, itemsFullyViewed + itemsPerPage)
    .map((product) => {
      return <ProductItem key={product.id} product={product}></ProductItem>;
    });

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = (event) => {
    setPageNumber(event.selected);
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-4   ">
        {displayItems}
      </div>  
      <ReactPaginate
        className={
          "flex justify-center space-x-30 p-6 sticky sm:space-x-10 sm:p-10"
        }
        pageCount={pageCount}
        onPageChange={changePage}
        previousLinkClassName={
          "rounded bg-blue-500 py-2 px-4 shadow outline-none "
        }
        pageLinkClassName={"rounded bg-blue-500 py-2 px-4 shadow outline-none "}
        nextLinkClassName={"rounded bg-blue-500 py-2 px-4 shadow outline-none "}
        activeLinkClassName={"bg-blue-200"}
      />
    </Layout>
  );
}
