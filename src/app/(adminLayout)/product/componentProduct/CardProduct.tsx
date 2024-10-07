import { Product } from "../page";
import { ActionsProduct } from "./ActionsProduct";

export const CardProduct = (product: Product) => {
  return (
    <div
      key={product.id}
      className=" flex flex-col justify-center md:h-[400px] items-center  rounded-lg"
    >
      <div
        className="rounded-xl bg-dark-slate-gray overflow-hidden relative text-center p-4 group  items-center 
              flex flex-col max-w-sm hover:shadow-2xl hover:shadow-teal-400 transition-all duration-500 hover:cursor-default shadow-xl"
      >
        <div className="text-gray-500 group-hover:scale-105 transition-all">
          <img
            src={product.img}
            alt={product.title}
            className="w-32 h-32 rounded-2xl "
          />
        </div>
        <div className="group-hover:pb-10 transition-all duration-500 mt-10 delay-200">
          <h1 className="font-semibold text-light-teal mb-4">
            {product.title}
          </h1>
          <p className="text-white text-sm">{product.dis}</p>
        </div>
        <>
          <ActionsProduct />
        </>
      </div>
    </div>
  );
};
