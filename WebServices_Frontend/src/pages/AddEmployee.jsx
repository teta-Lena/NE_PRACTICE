import React from "react";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validSchema = yup.object().shape({
  names: yup.string().required("Names are required").min(6),
  nid: yup
    .string()
    .length(16, "NID length is 16")
    .required("National ID is required"),
  email: yup.string().email().required("Email is required"),
  phone: yup.string().required(),
  password: yup.string().required("Password is required").min(8).max(32),
});

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validSchema) });

  return (
    <div className="h-screen w-full flex flex-col">
      <NavBar />
      <div className="h-3/4">
        <p className="text-center font-bold mt-4 text-xl">
          Add employee Laptop
        </p>
        <div className="w-full flex flex-row ">
          <div className="w-2/4 mx-24 mt-10">
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Names
              </label>
              <input
                type="text"
                {...register("names")}
                id="names"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-3/4 p-2.5"
              />
              <p className="text-red-800">{errors.names?.message}</p>
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="text"
                id="email"
                {...register("email")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5"
              />
              <p className="text-red-800">{errors.nid?.message}</p>
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                National ID
              </label>
              <input
                type="text"
                id="email"
                {...register("nid")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5 "
              />
              <p className="text-red-800">{errors.email?.message}</p>
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Laptop manufacturer
              </label>
              <input
                type="text"
                id="email"
                {...register("laptopmanufacturer")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5 "
              />
              <p className="text-red-800">{errors.email?.message}</p>
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Serial number
              </label>
              <input
                type="text"
                id="email"
                {...register("email")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5 "
              />
              <p className="text-red-800">{errors.email?.message}</p>
            </div>
          </div>
          <div className="w-2/4 mx-24 mt-10">
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Phone
              </label>
              <input
                type="text"
                {...register("phone")}
                id="names"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-3/4 p-2.5"
              />
              <p className="text-red-800">{errors.names?.message}</p>
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Department
              </label>
              <input
                type="text"
                id="NID"
                {...register("department")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5"
              />
              <p className="text-red-800">{errors.nid?.message}</p>
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Position
              </label>
              <input
                type="text"
                id="email"
                {...register("position")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5 "
              />
              <p className="text-red-800">{errors.email?.message}</p>
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Model
              </label>
              <input
                type="text"
                id="email"
                {...register("model")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5 "
              />
              <p className="text-red-800">{errors.email?.message}</p>
            </div>
            <div className="mb-2 mt-10">
              <input
                type="submit"
                id="submit"
                className="bg-[#1E1E1E] border  text-white text-sm rounded-lg block w-1/4 p-2.5 "
                value={"Save"}
              />
              <p className="text-red-800">{errors.email?.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
