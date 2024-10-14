import { Button, Drawer, Form, Input, Popconfirm, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Brand, Category, Product } from "../page";
import { formatCurrency } from "@/utils";
import { CardProduct } from "./CardProduct";
import clsx from "clsx";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import LayoutStateHandler from "@/components/layout/LayoutState";

interface Props {
  open: boolean;
  handleCancel: () => void;
  product: Product | undefined;
  categories: Category[] | undefined;
  brands: Brand[] | undefined;
  isLoadingProduct: boolean;
  errorProduct: any;
}

export const DrawerProduct: React.FC<Props> = ({
  handleCancel,
  open,
  product,
  categories,
  brands,
  isLoadingProduct,
  errorProduct,
}) => {
  const [check, setCheck] = useState<boolean>(false);
  const [drawerWidth, setDrawerWidth] = useState<string>("60%");

  useEffect(() => {
    const updateWidth = () => {
      setDrawerWidth(window.innerWidth < 768 ? "100%" : "60%");
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <Drawer
      // width={window.innerWidth < 768 ? "100%" : "60%"}
      width={drawerWidth}
      title={<h1 className=" text-white">Product Details: {product?.name} </h1>}
      onClose={() => {
        handleCancel();
        setCheck(false);
      }}
      open={open}
      footer={null}
    >
      <LayoutStateHandler
        isLoading={isLoadingProduct}
        error={errorProduct}
        data={product}
      >
        <div className="flex items-center flex-col md:flex-row gap-5">
          <div className="flex flex-col justify-center items-center gap-y-5">
            {/* <Popconfirm
              placement="right"
              title="Open Change Information"
              description="Are you sure you want to change your infomation?"
              onConfirm={() => setCheck(!check)}
              okText="Yes"
              cancelText="No"
              icon={<QuestionCircleOutlined />}
            > */}
            <Button
              onClick={() => setCheck(!check)}
              icon={!check ? <EditOutlined /> : <CloseOutlined />}
              className="w-1/3 order-1"
            >
              {check ? "Close" : "Edit"}
            </Button>
            {/* </Popconfirm> */}
            {product && (
              <div
                key={product.id_product}
                className={clsx(
                  "rounded-xl  overflow-hidden w-full  h-auto relative text-center p-4 group  flex flex-col max-w-sm hover:shadow-2xl  transition-all duration-500 hover:cursor-default shadow-xl",
                  {
                    "bg-gray-500 hover:shadow-red-400": product.status,
                    "bg-dark-slate-gray hover:shadow-green-400":
                      !product.status,
                  }
                )}
              >
                <CardProduct open={open} product={product} />
              </div>
            )}
          </div>

          {product && check && (
            <div className="md:w-[600px] w-4/5">
              <Form
                layout="vertical"
                size="small"
                className="w-full "
                // onFinish={handleSubmit}
              >
                <Form.Item
                  name="name"
                  label={<h3 className="text-white">Name Product</h3>}
                >
                  <Input
                    className="w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus-within:bg-zinc-900 hover:bg-zinc-900"
                    placeholder={product.name}
                  />
                </Form.Item>
                <Form.Item
                  name="description"
                  label={<h3 className="text-white">Description</h3>}
                >
                  <Input.TextArea
                    className="w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus-within:bg-zinc-900 hover:bg-zinc-900"
                    autoSize={{ minRows: 5, maxRows: 8 }}
                    placeholder={product.description}
                  />
                </Form.Item>
                <Form.Item
                  name="price"
                  label={<h3 className="text-white">Price</h3>}
                >
                  <Input
                    className="w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus-within:bg-zinc-900 hover:bg-zinc-900"
                    placeholder={formatCurrency(product.price)}
                  />
                </Form.Item>
                <Form.Item
                  name="id_category"
                  label={<h3 className="text-white">Category</h3>}
                >
                  <Select size="large" placeholder={product.category?.name}>
                    {categories?.map((category) => (
                      <Select.Option
                        key={category.id_category}
                        value={category.id_category}
                      >
                        <p className="text-white py-2">{category.name}</p>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="id_brand"
                  label={<h3 className="text-white">Brand</h3>}
                >
                  <Select size="large" placeholder={product.brand?.name}>
                    {brands?.map((brand) => (
                      <Select.Option
                        key={brand.id_brand}
                        value={brand.id_brand}
                      >
                        <p className="text-white">{brand.name}</p>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="stock"
                  label={<h3 className="text-white">Stock</h3>}
                >
                  <Input
                    className="w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus-within:bg-zinc-900 hover:bg-zinc-900"
                    placeholder={`${product.stock}`}
                  />
                </Form.Item>
                <Form.Item
                  name="discoust"
                  label={<h3 className="text-white">Discount</h3>}
                >
                  <Input
                    className="w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus-within:bg-zinc-900 hover:bg-zinc-900"
                    placeholder={`${product.discoust}`}
                  />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
        </div>
      </LayoutStateHandler>
    </Drawer>
  );
};
