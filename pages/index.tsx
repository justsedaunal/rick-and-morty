import { useGetLocationsQuery } from "../redux/slices/locations";

export default function Home() {
  const myInlineStyles = {
    width: "340px",
    height: "200px",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const { data: locations, error, isLoading } = useGetLocationsQuery();

  console.log("Locations:", locations);

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
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-wrap gap-4 align-center justify-center">
      {locations.results.map((location) => (
        <div
          key={location.id}
          className="bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6">
                <img src="./earth-svgrepo-com.svg" />
                <div className="space-y-2" style={myInlineStyles}>
                  <h2 className="font-medium">{location.name}</h2>
                  <p className="text-slate-800">Type : {location.type}</p>
                  <p className="text-slate-800">
                    Dimension :{" "}
                    {location.dimension === "unknown"
                      ? location.dimension.replace(location.dimension, "-")
                      : location.dimension}
                  </p>
                  <p className="text-slate-800">
                    Resident count : {location.residents.length}
                  </p>
                  <a
                    href=""
                    className="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                    target="_blank"
                  >
                    See More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
