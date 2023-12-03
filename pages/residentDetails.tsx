import { useState } from "react";
import Link from "next/link";
import {
  useGetLocationsQuery,
  useGetCharacterQuery,
} from "../redux/slices/locations";
export default function ResidentDetails({ characterId }) {
  const {
    data: resident,
    error,
    isLoading,
  } = useGetCharacterQuery(characterId);

  if (isLoading) {
    return <li>Loading resident...</li>;
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
              <div class="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
                <span class="block h-6 w-6 bg-green-400 rounded-full"> </span>
              </div>
              <div class="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200">
                <span class="block h-6 w-6 bg-blue-400 rounded-full"> </span>
              </div>
              <div class="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                <span class="block h-6 w-6 bg-yellow-400 rounded-full"> </span>
              </div>
            </div>
            <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
              <button class="block text-xl font-semibold text-gray-700 cursor-auto">
                {resident.status}
              </button>

              <Link
                href={`/character/${resident.id}`}
                class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                Go Detail {resident.id}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
