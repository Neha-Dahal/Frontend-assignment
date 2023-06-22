import React, { useState } from "react";
import FormInput from "../formInput";

interface ProductProps {
  prod_name: string;
  quantity: number;
  price: number;
  remark: string;
  description: string;
}

const AddProduct = () => {
  const [values, setValues] = useState<ProductProps>({
    prod_name: "",
    quantity: 0,
    price: 0,
    remark: "",
    description: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log(
      values.prod_name,
      values.quantity,
      values.price,
      values.remark,
      values.description
    );
  };

  const isButtonDisabled: boolean =
    !values.prod_name ||
    !values.quantity ||
    !values.price ||
    !values.remark ||
    !values.description;

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form>
        <div>
          <FormInput
            type="text"
            name="prod_name"
            placeholder="Enter product name"
            value={values.prod_name}
            label="Product Name *"
            onChange={onChange}
          />
        </div>
        <div>
          <FormInput
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={values.quantity}
            label="Quantity *"
            onChange={onChange}
          />
        </div>
        <div>
          <FormInput
            type="number"
            name="price"
            placeholder="Enter price"
            value={values.price}
            label="Price *"
            onChange={onChange}
          />
        </div>
        <div>
          <FormInput
            type="text"
            name="remark"
            placeholder="Enter remarks"
            value={values.remark}
            label="Remark *"
            onChange={onChange}
          />
        </div>
        <div>
          <FormInput
            type="text"
            name="description"
            placeholder="Enter description"
            value={values.description}
            label="Description *"
            onChange={onChange}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isButtonDisabled}
            onClick={handleFormSubmit}
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
