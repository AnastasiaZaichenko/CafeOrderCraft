import * as yup from "yup";
const TEMPLATE_TABLE_NUMBER = /^[1-9][0-9]?$/;
export const schemaForValidationTable = yup.object().shape({
  number: yup
    .string()
    .matches(TEMPLATE_TABLE_NUMBER, "Must be a number from 1 to 99")
    .required("Table is a required field"),
});

export const TEMPLATE_WAITER_NAME = /^\d{3}-\d{3}-\d{4}$/;
export const schemaForValidationWaiter = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[a-zA-Z]{2,}$/, "Name should contain at least two Latin letters")
    .required("Name is a required field"),
  phone: yup
    .string()
    .matches(
      TEMPLATE_WAITER_NAME,
      "Phone number should be in the format XXX-XXX-XXXX"
    )
    .required("Phone number is a required field"),
});

const TEMPLATE_MEAL_PRICE = /^\d+(\.\d{2})?$/;
export const schemaForValidationMeal = yup.object().shape({
  name: yup
    .string()
    .min(5, "Name should contain at least 5 characters")
    .required("Meal is a required field"),
  description: yup
    .string()
    .min(10, "Description should contain at least 10 characters")
    .required("Description is a required field"),
  price: yup
    .string()
    .matches(TEMPLATE_MEAL_PRICE, 'Amount must be in the format "0.00"')
    .required("Price is a required field"),
});

export const schemaForValidationReview = yup.object().shape({
  review: yup.string().max(10, "Review should contain maximum 300 characters"),
});
