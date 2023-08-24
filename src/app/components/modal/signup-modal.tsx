"use client";
import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSignup } from "@/hooks/use-signup";
import { ErrorToast } from "../toasts";

interface SignupProps {
  isOpen: boolean;
  closeModal: () => void;
}

const validationSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username should be of minimum 3 character length")
    .max(20, "Username should be of maximum 20 characters length"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should be of maximum 6 characters length"),
  email: yup.string().required("Email is required").email(),
});

const Signup: React.FC<SignupProps> = ({ isOpen, closeModal }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isToastShown, setIsToastShown] = useState(false);

  const { mutate, isError, failureReason } = useSignup();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsClicked(true);
      mutate(values);
    },
  });

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
    <>
      {showToast()}

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as='div' className='relative z-50' onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 z-0 bg-black bg-opacity-10' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={React.Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <form onSubmit={formik.handleSubmit}>
                    <div className='card-body'>
                      <div className='form-control w-full'>
                        <label className='label' htmlFor='email'>
                          <span className='label-text'>
                            Email <span className='text-red-500'>*</span>
                          </span>
                        </label>
                        <input
                          className={clsx("input input-bordered w-full", {
                            "input-error":
                              formik.touched.email &&
                              Boolean(formik.errors.email),
                          })}
                          type='email'
                          id='email'
                          name='email'
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          placeholder='foobar@email.com'
                        />
                        <label className='label pb-0 pt-1'>
                          {formik.touched.email &&
                            Boolean(formik.errors.email) && (
                              <span className='label-text-alt'>
                                {formik.errors.email}
                              </span>
                            )}
                        </label>
                      </div>
                      <div className='form-control w-full'>
                        <label className='label' htmlFor='username'>
                          <span className='label-text'>
                            Username <span className='text-red-500'>*</span>
                          </span>
                        </label>
                        <input
                          className={clsx("input input-bordered w-full", {
                            "input-error":
                              formik.touched.username &&
                              Boolean(formik.errors.username),
                          })}
                          type='text'
                          id='username'
                          name='username'
                          onChange={formik.handleChange}
                          value={formik.values.username}
                          placeholder='username'
                        />
                        <label className='label pb-0 pt-1'>
                          {formik.touched.username &&
                            Boolean(formik.errors.username) && (
                              <span className='label-text-alt'>
                                {formik.errors.username}
                              </span>
                            )}
                        </label>
                      </div>
                      <div className='form-control w-full'>
                        <label className='label' htmlFor='password'>
                          <span className='label-text'>
                            Password <span className='text-red-500'>*</span>
                          </span>
                        </label>
                        <input
                          className={clsx("input input-bordered w-full", {
                            "input-error":
                              formik.touched.password &&
                              Boolean(formik.errors.password),
                          })}
                          type='password'
                          id='password'
                          name='password'
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          placeholder='password'
                        />
                        <label className='label pb-0 pt-1'>
                          {formik.touched.password &&
                            Boolean(formik.errors.password) && (
                              <span className='label-text-alt'>
                                {formik.errors.password}
                              </span>
                            )}
                        </label>
                      </div>
                      <div className='mt-6 w-full'>
                        <button
                          className='btn btn-neutral w-full'
                          type='submit'
                        >
                          <span
                            className={clsx({
                              "loading loading-spinner": isClicked,
                            })}
                          ></span>
                          Create account
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signup;
