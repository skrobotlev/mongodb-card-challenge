import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import valid from "card-validator";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Store from "../store/store";
import CreditCardForm from "../components/credit-card/CreditCardForm";

const CardPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "25%",
      }}
    >
      <CreditCardForm />
    </div>
  );
};

export default CardPage;
