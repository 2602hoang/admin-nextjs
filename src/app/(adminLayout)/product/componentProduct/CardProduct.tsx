import clsx from "clsx";
import { Product } from "../page";
import { Tag, Tooltip } from "antd";
import { formatCurrency } from "@/utils";

interface Props {
  product: Product;
  open: boolean;
}
export const CardProduct: React.FC<Props> = ({ product, open }) => {
  const getCountryFlag = () => {
    const countryId = product.id_brand;

    switch (countryId) {
      case 1:
        return "🇻🇳";
      case 2:
        return "🇨🇳";
      case 3:
        return "🇹🇭";
      case 4:
        return "🇰🇷";
      case 5:
        return "🇯🇵";
      case 6:
        return "🇬🇧";
      default:
        return "🏳️";
    }
  };
  return (
    <div className=" rounded-xl w-full">
      <div className="text-gray-500 group-hover:scale-105  transition-all">
        <img
          src={product.images}
          alt={product.name}
          className="min-w-32 max-h-32 rounded-2xl "
        />
      </div>
      <div className="group-hover:pb-10 transition-all duration-500 mt-10 delay-200 flex justify-between flex-col">
        <div className="text-start">
          <h1 className="font-semibold h-11 items-center flex text-light-teal mb-4">
            <Tooltip
              title={
                <p className="text-black">
                  {!product.status ? "Active" : "Inactive"}
                </p>
              }
              color={!product.status ? "green" : "red"}
              placement="top"
            >
              <Tag
                className="min-w-8 h-5  flex justify-center items-center rounded-md  border p-2 text-[10px] "
                color={!product.status ? "green" : "red"}
              >
                {!product.status ? "√" : "X"}
              </Tag>
            </Tooltip>
            {product.name}{" "}
          </h1>
          <p
            className={clsx("text-white  text-sm", {
              "overflow-hidden line-clamp-2 h-10": !open,
              "line-clamp-none": open,
            })}
          >
            {product.description}
          </p>
        </div>

        <div className="text-start mt-3  space-y-3 text-light-teal">
          <p className="text-orange-500">
            Price: <span>{formatCurrency(product.price, "en-US", "USD")}</span>
          </p>
          <p>
            Country:
            <span className="text-[20px] ml-2">{getCountryFlag()}</span>
          </p>
          <p>Category: {product.category.name}</p>
          <p>Stock: {product.stock}</p>
          <p
            className={clsx("", {
              "text-orange-500": product.discoust > 0,
              "line-through": product.discoust === 0,
            })}
          >
            Discount:
            <span> {product.discoust ? product.discoust + "%" : ""} </span>
          </p>
        </div>
      </div>
    </div>
  );
};
