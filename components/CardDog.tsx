import {
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { forwardRef, useState } from "react";
import { Dog } from "../src/generated/graphql";

interface Props {
  dog?: Pick<
    Dog,
    | "name"
    | "breed"
    | "ageInWeeks"
    | "image"
    | "sex"
    | "weight"
    | "fee"
    | "description"
  >;
  onClick?: () => void;
  isLoading?: boolean;
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CardDog = forwardRef<HTMLDivElement, Props>(
  ({ dog, onClick, isLoading }, ref) => {
    const [loading, setLoading] = useState(true);
    return (
      <Card ref={ref} onClick={onClick} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <section className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-l-lg rounded-t-r-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ">
            <Image
              src={(dog && dog.image) ?? ""}
              className={cn(
                "hidden transform transition-all duration-500 group-hover:opacity-75",
                loading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              )}
              layout="fill"
              objectFit="cover"
              onLoadingComplete={() => setLoading(false)}
              alt=""
            />
          </section>
          <CardContent
            sx={{
              height: "200px",
              position: "relative",
            }}>
            {isLoading ? (
              <div className="grid place-items-center h-full">
                <CircularProgress />
              </div>
            ) : (
              <>
                <Typography gutterBottom variant="h5" component="div">
                  {dog.name}
                </Typography>
                <Typography
                  className="m"
                  variant="body2"
                  dangerouslySetInnerHTML={{
                    __html: dog.description.join(", "),
                  }}
                  color="text.secondary"
                />
                <div className="absolute bottom-0 left-0 right-0 -top-10 bg-gradient-to-b from-transparent to-white w-full " />
              </>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
);

CardDog.displayName = "Search";

export default CardDog;
