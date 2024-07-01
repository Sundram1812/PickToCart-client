import React from "react";
import ProductReviewCard from "./ProductReviewCard";
import { Grid, LinearProgress, Rating } from "@mui/material";

function RatingAndReview() {
  return (
    <section className="lg:px-24 sm:px-6 px-4 spy-6  grid lg:grid-cols-2 space-y-10 lg:w-full w-[95%] mx-auto pb-8">
      <div className="flex overflow-x-scroll pb-6 lg:flex-col">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ProductReviewCard key={item} />
        ))}
      </div>

      <div>
        <h2 className="font-semibold lg:text-lg">Product Rating</h2>
        <div className=" flex items-center space-x-3">
          <Rating readOnly precision={0.5} value={4.5} />
          <p className=" opacity-60 text-sm">56560 Ratings</p>
        </div>

        <Grid container alignItems="center" sx={{ mt: "3rem", gap: "2rem" }}>
          <Grid item xs={2} className="">
            <p>Excellent</p>
          </Grid>

          <Grid item xs={7} sx={{ pr: "1rem" }}>
            <LinearProgress
              variant="determinate"
              value={70}
              color="success"
              sx={{ borderRadius: "5rem", height: "7px", bgcolor: "#5D5858" }}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" sx={{ mt: "3rem", gap: "2rem" }}>
          <Grid item xs={2} className="">
            <p>Very Good</p>
          </Grid>

          <Grid item xs={7} sx={{ pr: "1rem" }}>
            <LinearProgress
              variant="determinate"
              value={50}
              color="success"
              sx={{ borderRadius: "5rem", height: "7px", bgcolor: "#5D5858" }}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" sx={{ mt: "3rem", gap: "2rem" }}>
          <Grid item xs={2} className="">
            <p>Good</p>
          </Grid>

          <Grid item xs={7} sx={{ pr: "1rem" }}>
            <LinearProgress
              variant="determinate"
              value={40}
              color="secondary"
              sx={{ borderRadius: "5rem", height: "7px", bgcolor: "#5D5858" }}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" sx={{ mt: "3rem", gap: "2rem" }}>
          <Grid item xs={2} className="">
            <p>Average</p>
          </Grid>

          <Grid item xs={7} sx={{ pr: "1rem" }}>
            <LinearProgress
              variant="determinate"
              value={30}
              color="warning"
              sx={{ borderRadius: "5rem", height: "7px", bgcolor: "#5D5858" }}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" sx={{ mt: "3rem", gap: "2rem" }}>
          <Grid item xs={2} className="">
            <p>Poor</p>
          </Grid>

          <Grid item xs={7} sx={{ pr: "4px" }}>
            <LinearProgress
              variant="determinate"
              value={20}
              color="error"
              sx={{ borderRadius: "5rem", height: "7px", bgcolor: "#5D5858" }}
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default RatingAndReview;
