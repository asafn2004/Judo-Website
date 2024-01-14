import 'dotenv/config';
import express from "express";
import config from "./Utils/Config";
import cors from "cors";
import ErrorHandler from "./Middleware/route-not-found";
import sendEmailRouter from "./Routes/sendEmailRoute";
import path from "path";

// create server

const server = express();

//cors = cross origin resource sharing...
server.use(cors());

//how we send the data back (JSON,XML,RAW,string)
server.use(express.json());

//static images and videos from the backend
server.use("/images", express.static("images"));
server.use("/video", express.static("video"));

//use the build files
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../frontend/build");

server.use(express.static(buildPath));

server.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

//using routes => localhost:5000/api/v1
server.use("/api/", sendEmailRouter);

//handle errors(Route Not Found);
server.use("*", ErrorHandler);

// start the server

server.listen(config.webPort, () => {
  console.log(`listing on http://localhost:${config.webPort}`);
});
