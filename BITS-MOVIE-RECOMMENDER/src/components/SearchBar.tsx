import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  // Yup validation schema
  const validationSchema = yup.object({
    searchTerm: yup.string()
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
        <Form className="flex items-center justify-center w-full max-w-lg mx-2 p-2">
          <div className="flex w-full">
            <Field
              name="searchTerm"
              type="text"
              placeholder="Search for a movie..."
              className={`flex-grow px-4 py-2 text-lg text-white bg-gray-800 border-none rounded-l-lg focus:outline-none placeholder-gray-400 ${
                errors.searchTerm && touched.searchTerm
                  ? "border-2 border-red-500"
                  : ""
              }`}
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 uppercase text-white font-bold rounded-r-lg hover:bg-green-700 transition duration-200"
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
