import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  // Yup validation schema
  const validationSchema = yup.object({
    searchTerm: yup
      .string()
      .required("Search term is required")
      .min(2, "Must be at least 2 characters")
      .max(50, "Must be less than 50 characters"),
  });

  return (
    <Formik
      initialValues={{ searchTerm: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSearch(values.searchTerm);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex items-center justify-center w-full max-w-2xl mx-auto p-2">
          <div className="flex w-full bg-gray-800 rounded-full shadow-lg transition-shadow duration-300 ease-in-out">
            <Field
              name="searchTerm"
              type="text"
              placeholder="Search for a movie..."
              className={`w-full px-6 py-4 text-lg text-white bg-transparent rounded-l-full placeholder-gray-400 focus:outline-none ${
                errors.searchTerm && touched.searchTerm
                  ? "border-2 border-gray-800 focus:ring-green-500"
                  : "border border-transparent focus:ring-2 focus:ring-green-500"
              } transition duration-300 ease-in-out`}
            />
            <button
              type="submit"
              className="px-8 py-4 bg-green-600 text-white font-bold uppercase tracking-wide rounded-r-full hover:bg-green-700 focus:outline-none transition-transform duration-200 ease-in-out active:scale-100"
            >
              Search
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
