import { useState } from "react";
import Link from "next/link";
import {
  useGetLocationsQuery,
  useGetCharacterQuery,
} from "../redux/slices/locations";
export default function ResidentDetails({ characterId }) {
  const { data: resident, error, isLoading } = useGetCharacterQuery(characterId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div aria-label="Loading..." role="status">
          <svg
            class="animate-spin w-10 h-10 fill-slate-800"
            viewBox="3 3 18 18"
          >
            <path
              class="opacity-20"
              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
            ></path>
            <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
          </svg>
        </div>
      </div>
    );
  }

  if (error) {
    return <li>Error loading resident: {error.message}</li>;
  }
  
    return (
      <>
        {" "}
        {/* <li>{resident.name}</li>
        <li>{resident.status}</li>
        <img src={resident.image} />
        <li> {resident.species} </li> */}
        <div class="min-h-screen  flex justify-center items-center">
          
          <div class="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
            <img
              class="w-64 object-cover rounded-t-md"
              src={resident.image}
              alt=""
            />
            <div class="mt-4">
              <h1 class="text-2xl font-bold text-gray-700">{resident.name}</h1>
              <p class="text-sm mt-2 text-gray-700">{resident.species}</p>
              <div class="mt-3 space-x-4 flex p-1">
              <div class="mt-3 space-x-4 flex p-1">
              <div
                class={`p-1 border-4 rounded-full cursor-pointer 
                 ${
                  resident.status === "Alive"
                     ? "bg-green-400"
                     : resident.status === "Dead"
                     ? "bg-red-400"
                     : resident.status === "unknown"
                     ? "bg-gray-400"
                     : ""
                 } 
                  hover:scale-105 transition transform duration-200`}
              >
                <span
                  class={`block h-6 w-6 
                   ${
                    resident.status === "alive"
                       ? "bg-green-400 rounded-full"
                       : resident.status === "dead"
                       ? "bg-red-400 rounded-full"
                       : resident.status === "unknown"
                       ? "bg-gray-400 rounded-full"
                       : ""
                   }`}
                ></span>
              </div>
            </div>
              </div>
              <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
                <button class="block text-xl font-semibold text-gray-700 cursor-auto">
                  {resident.status}
                </button>
             
          <Link href={`/character/${resident.id}`} class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">
            Go Detail {resident.id}
          </Link>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }