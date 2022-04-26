import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import valid from "card-validator";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Store from "../store/store";

const validationSchema = Yup.object().shape({
  creditCard: Yup.number().test(
    "test-number",
    "Credit Card number is invalid",
    (value) => valid.number(value).isValid
  ),
  expirationDate: Yup.string().test(
    "test-number",
    "Expiration Date is invalid",
    (value) => valid.expirationDate(value).isValid
  ),
  cvv: Yup.string().test(
    "test-number",
    "cvv is invalid",
    (value) => valid.cvv(value).isValid
  ),
});

const CardPage = () => {
  const [form, setForm] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    amount: "",
  });
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const store = new Store();

  // const formik = useFormik({
  //   initialValues: {
  //     cardNumber: "",
  //     expirationDate: "",
  //     cvv: "",
  //     amount: "",
  //   },
  //   validationSchema,
  //   onSubmit: () => console.log("."),
  // });
  // const { values } = formik;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // createCards();
    store.addCard(form);
    // setIsSubmitting(true);
    console.log(JSON.stringify(form));

    // let errs = validate();
    // setErrors(errs);
  };

  // const creditCard = formik.getFieldMeta("creditCard");
  // const expirationDate = formik.getFieldMeta("expirationDate");
  // const cvv = formik.getFieldMeta("cvv");

  return (
    <div className="w-full p-4 bg-blue-100 h-full">
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="mx-auto max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            // htmlFor="creditCard"
          >
            Card number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardNumber"
            type="text"
            value={form.cardNumber}
            onChange={handleChange}
            placeholder="credit card number"
            // {...formik.getFieldProps("creditCard")}
          />
          {/* {creditCard.error && (
            <p className="text-red-500 text-xs italic">{creditCard.error}</p>
          )} */}
          {/* <div /> */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="expirationDate"
          >
            Expiration Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="expirationDate"
            type="text"
            value={form.expirationDate}
            onChange={handleChange}
            placeholder="expiration date"
            // {...formik.getFieldProps("expirationDate")}
          />
          {/* {expirationDate.error && (
            <p className="text-red-500 text-xs italic">{cvv.error}</p>
          )} */}
          <label
          // htmlFor="cvv"
          >
            cvv
          </label>
          <input
            id="cvv"
            type="text"
            value={form.cvv}
            onChange={handleChange}
            placeholder="expiration date"
            // {...formik.getFieldProps("cvv")}
          />
          {/* {cvv.error && (
            <p className="text-red-500 text-xs italic">{cvv.error}</p>
          )} */}
          <div />
          <label
          //  htmlFor="amount"
          >
            amount
          </label>
          <input
            id="amount"
            type="text"
            value={form.amount}
            onChange={handleChange}
            placeholder="amount"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            // disabled={!(formik.isValid && formik.dirty)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardPage;
