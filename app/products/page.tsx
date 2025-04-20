import Image from "next/image";
import Link from "next/link";


export default async function Products() {
    //WE BRING THE DATA 
 const fetchData = await fetch('https://fakestoreapi.com/products');
 const res = await fetchData.json();
 console.log(res);
  return ( 
  <>
  
  <div className="gap-5 grid lg:grid-cols-3 p-12">

  
  {
    res.map((val: any) => {
      return (
        <div
          key={val.id} // Add a unique key for each item
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <Link href={`products/${val.id}`}>
            <div>
              <img
                className="p-8 rounded-t-lg w-[400px] h-[400px]"
                src={val.image}
                alt="product image"
                height={200}
                width={400}
              />
            </div>
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {val.title}
              </h5>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Star icons */}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {val.rating.rate}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${val.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        </div>
      );
    })
  }

    </div>
  </>
  );
}
