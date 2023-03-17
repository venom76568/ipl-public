"use client";

import {
  useMutation,
} from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react';
import request from "graphql-request";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createFormMutation } from '@/api/graphql/mutation';
import { useRouter } from 'next/navigation';

interface ITeamMembersForm {
  name: string
  email: string;
  phone: string;
  whatsapp: string;
  college: string;
}

const initMemberForm: ITeamMembersForm = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  college: "",
}

interface Iform {
  teamName: string;
  teamLeader: string;
  email: string;
  phone: string;
  whatsapp: string;
  college: string;
  teamMembers: ITeamMembersForm[];
}

const initForm: Iform = {
  teamName: "",
  teamLeader: "",
  email: "",
  phone: "",
  whatsapp: "",
  college: "",
  teamMembers: Array(4).fill({ ...initMemberForm })
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const Form = () => {
  const router = useRouter();
  const [form, setForm] = useState<Iform>(initForm);

  // mutation
  const mutation = useMutation({
    mutationKey: ['createForm'],
    mutationFn: async (form: Iform) => request("https://ipl-backend.vercel.app/api",
      createFormMutation,
      {
        createFormInput: form,
      }),
    onSuccess: async (data: any) => {
      const code = data.createForm.code;
      const message = data.createForm.message;
      if (code == 200) {
        toast.success(message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setForm(initForm);
        await delay(1500);
        toast.info("Now you will be redirected to payemnt portal", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        await delay(1500);
        router.push('https://pay.vnit.ac.in/event');
      } else {
        toast.error(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(form);
  }

  const endsWithNumber = (str: string) => /[0-9]+$/.test(str);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (endsWithNumber(name)) {
      const idx = Number(name.charAt(name.length - 1)) - 1;
      const dictKey = name.slice(0, -2);
      setForm((f) => {
        return {
          ...f,
          teamMembers: f.teamMembers.map((member, i) => {
            if (i === idx) {
              return {
                ...member,
                [dictKey]: value,
              };
            }
            return member;
          })
        }
      });
      return;
    }
    setForm((f) => {
      return {
        ...f,
        [name]: value,
      }
    })
  }

  const teamMemberNode = (id: number) => {
    return (
      <div key={id} className="overflow-hidden shadow sm:rounded-md mb-8">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-[#f4cb33]">
            {`Team Member ${id + 1}`}
          </h3>
          <p className="mt-1 text-sm text-white mb-4">
          </p>
        </div>
        <div className="rounded-md bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor={`name_${id}`}
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                type="text"
                name={`name_${id}`}
                id={`name_${id}`}
                value={form.teamMembers[id - 1].name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor={`phone_${id}`}
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                  +91
                </span>
                <input
                  type="text"
                  name={`phone_${id}`}
                  id={`phone_${id}`}
                  maxLength={10}
                  value={form.teamMembers[id - 1].phone}
                  onChange={handleChange}
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor={`whatsapp_${id}`}
                className="block text-sm font-medium text-gray-700"
              >
                WhatsApp Number
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                  +91
                </span>
                <input
                  type="text"
                  name={`whatsapp_${id}`}
                  id={`whatsapp_${id}`}
                  maxLength={10}
                  value={form.teamMembers[id - 1].whatsapp}
                  onChange={handleChange}
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor={`email_${id}`}
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                name={`email_${id}`}
                id={`email_${id}`}
                value={form.teamMembers[id - 1].email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor={`college_${id}`}
                className="block text-sm font-medium text-gray-700"
              >
                College
              </label>
              <input
                type="text"
                name={`college_${id}`}
                id={`college_${id}`}
                value={form.teamMembers[id - 1].college}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div id="form" className="bg-[#141414]">
      <div className="w-full text-5xl xl:text-6xl text-center pt-20 pb-10 font-semibold text-[#f4cb33] uppercase">
        Register Now
      </div>
      <div className="py-10 flex flex-col justify-center items-center px-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-10 justify-center">
            <div className="shadow sm:overflow-hidden sm:rounded-md mb-4">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-[#f4cb33]">
                  Profile
                </h3>
                <p className="mt-1 text-sm text-white mb-4">
                  This information will be displayed
                  publicly so be careful what you share.
                </p>
              </div>
              <div className="space-y-6 rounded-md bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="teamName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Team Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        #IPL
                      </span>
                      <input
                        type="text"
                        name="teamName"
                        id="teamName"
                        required
                        value={form.teamName}
                        onChange={handleChange}
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Team Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden shadow sm:rounded-md mb-8">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-[#f4cb33]">
                  Team Leader
                </h3>
                <p className="mt-1 text-sm text-white mb-4">
                  Please fill the correct information for futher communication
                </p>
              </div>
              <div className="rounded-md bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="teamLeader"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      name="teamLeader"
                      id="teamLeader"
                      required
                      value={form.teamLeader}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        +91
                      </span>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        maxLength={10}
                        value={form.phone}
                        onChange={handleChange}
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-medium text-gray-700"
                    >
                      WhatsApp Number
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        +91
                      </span>
                      <input
                        type="text"
                        name="whatsapp"
                        id="whatsapp"
                        required
                        maxLength={10}
                        value={form.whatsapp}
                        onChange={handleChange}
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="college"
                      className="block text-sm font-medium text-gray-700"
                    >
                      College
                    </label>
                    <input
                      type="text"
                      name="college"
                      id="college"
                      required
                      value={form.college}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <div className="text-red-500 mb-4 text-lg font-bold underline underline-offset-4">
            <span>* Fill the following form according to the team size. A team can be of size 3 - 5</span>
          </div>
          <div>
            <span>* Fill the following form according to the team size. A team can be of size 3 - 5</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 items-center gap-10">
            {[1, 2, 3, 4].map(id => teamMemberNode(id))}
          </div>
          <div className="flex flex-col items-center">
            <div className="my-5 text-white" >
              <input
                type="checkbox"
                name="consent"
                id="checkbox"
                required
              />
              <label htmlFor="consent" className="pl-3 text-lg">
                I hereby declare that i have read the{" "}
                <a href="https://drive.google.com/file/d/1QUZYrz_cX1qNIe81CzctPqrAItTWCubM/view?usp=sharing" target='_blank' className="font-black hover:underline underline-offset-4 underline">
                  Brochure
                </a>{" "}
                and the details furnished above are correct to best of my
                Knowledge.
              </label>
            </div>
            <button type="submit" className="w-1/2 md:w-1/5 lg:w-[17%] inline-flex justify-center items-center border border-transparent bg-[#f4cb33] py-3 px-6 text-xl font-bold text-black shadow-sm focus:outline-none hover:bg-yellow-500 hover:scale-105 uppercase">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;