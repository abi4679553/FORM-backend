require("dotenv").config({ quiet: true });

const cors = require("cors");
const express = require("express");
const Listen = require("./config/Listen");
const connectDb = require("./config/db");
const IndexRouter = require("./router/formrouter");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

connectDb(mongoose);

app.use(IndexRouter);

Listen(app);