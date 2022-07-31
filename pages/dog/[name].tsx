import { CircularProgress, Grow } from "@mui/material";
import { dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import { getDog, queryClient } from "../../src/api";

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  await queryClient.prefetchQuery(["dog"], () =>
    getDog({ name: params.name as string })
  );

  return {
    props: {
      dehydratedData: dehydrate(queryClient),
      name: params.name,
    },
  };
}

function DogPage({ name }) {
  const { data, isLoading, isFetching, refetch } = useQuery(["dog"], () =>
    getDog({ name })
  );

  useEffect(() => {
    refetch();
  }, [name]);

  if (!data?.dog) {
    return <div>Not Dog Found</div>;
  }

  return (
    <div>
      <Header />
      {isLoading || isFetching ? (
        <div className="flex justify-center items-center h-64 ">
          <CircularProgress />
        </div>
      ) : (
        <Grow in={true}>
          <div className="flex gap-2 p-5 ">
            <div className="relative h-96 flex-[0.5] ">
              <Image
                src={data?.dog.image}
                layout="fill"
                objectFit="contain"
                alt={data?.dog.name}
              />
            </div>
            <div className="flex-[0.5] ">
              <h2 className="text-3xl font-bold ">{data?.dog.name}</h2>
              <div className="">
                <ul className="max-w-sm">
                  <li className="flex justify-between">
                    <span className="font-semibold">Age</span>{" "}
                    {data?.dog.ageInWeeks} weeks
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold">Breed</span>{" "}
                    {data?.dog.breed}{" "}
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold">Sex</span> {data?.dog.sex}{" "}
                    weeks
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold">Color</span>{" "}
                    {data?.dog.color ?? "Not available"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Grow>
      )}
    </div>
  );
}

export default DogPage;
