import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useUpdateUser } from "@/hooks/use-update-user";
import { ErrorToast } from "../toasts";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(1, "First name should be of minimum 1 character length")
    .max(50, "Last name should be of maximum 50 characters length"),
  lastName: yup
    .string()
    .max(50, "Last name should be of maximum 50 characters length"),
  bio: yup.string().max(140, "Bio should be of maximum 140 characters length"),
});

export default function Registration() {
  const [isClicked, setIsClicked] = useState(false);
  const [isToastShown, setIsToastShown] = useState(false);
  const { mutate, isError, failureReason } = useUpdateUser();

  const showToast = () => {
    return (
      <>
        {isToastShown && (
          <ErrorToast>
            {failureReason instanceof Error
              ? failureReason.message
              : "An error occurred"}
          </ErrorToast>
        )}
      </>
    );
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      bio: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsClicked(true);
      mutate(values);
    },
  });

  useEffect(() => {
    if (isError) {
      setIsClicked(false);
      setIsToastShown(true);

      const timer = setTimeout(() => {
        setIsToastShown(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isError]);

  return (
    <div className='min-h-screen flex justify-center items-center mx-auto'>
      {showToast()}
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col h-full'>
          <h1
            className={`font-barlow text-xl md:text-3xl text-neutral-800 font-semibold line-clamp-2 py-4`}
          >
            Complete your registration
          </h1>
          <div className='form-control w-full'>
            <label className='label' htmlFor='firstName'>
              <span className='label-text'>
                First Name <span className='text-red-500'>*</span>
              </span>
            </label>
            <input
              className={clsx("input input-bordered w-full", {
                "input-error":
                  formik.touched.firstName && Boolean(formik.errors.firstName),
              })}
              type='text'
              id='firstName'
              name='firstName'
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder='Hieronimus'
            />
            <label className='label'>
              {Boolean(formik.errors.firstName) && (
                <span className='label-text-alt'>
                  {formik.errors.firstName}
                </span>
              )}
            </label>
          </div>
          <div className='form-control w-full'>
            <label className='label' htmlFor='lastName'>
              <span className='label-text'>Last Name</span>
            </label>
            <input
              className={clsx("input input-bordered w-full", {
                "input-error":
                  formik.touched.lastName && Boolean(formik.errors.lastName),
              })}
              type='text'
              id='lastName'
              name='lastName'
              onChange={formik.handleChange}
              value={formik.values.lastName}
              placeholder='Ferry'
            />
            <label className='label'>
              {Boolean(formik.errors.lastName) && (
                <span className='label-text-alt'>{formik.errors.lastName}</span>
              )}
            </label>
          </div>
          <div className='w-full'>
            <label className='label' htmlFor='bio'>
              <span className='label-text'>Bio</span>
            </label>
            <textarea
              className={clsx("textarea textarea-bordered h-36 w-full", {
                "input-error": formik.touched.bio && Boolean(formik.errors.bio),
              })}
              id='bio'
              name='bio'
              onChange={formik.handleChange}
              value={formik.values.bio}
              placeholder='Enter your bio...'
            />
            <label className='label'>
              {Boolean(formik.errors.bio) && (
                <span className='label-text-alt'>{formik.errors.bio}</span>
              )}
            </label>
          </div>
          <div className='mt-6 w-full'>
            <button className='btn btn-neutral w-full' type='submit'>
              <span
                className={clsx({
                  "loading loading-spinner": isClicked,
                })}
              ></span>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
