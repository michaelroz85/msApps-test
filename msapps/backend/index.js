const express = require('express');
const cors = require("cors"); // import the cors package
const router = require('express').Router();
const moment = require('moment');
const app = express();
app.use(cors());
const axios = require('axios'); // import axios from ('axios');
const https = require("https");
let lastCategory = ""
let imagesData = "";
let data = "";
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const API_URL = 'http://localhost:3000/api';

app.get('/api/images', async (req, res) => { // get the images from the DB site
  const { category, page, sortBy } = req.query;
  if (category === lastCategory && imagesData) {
    data = imagesData
  } else {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`,
        { httpsAgent }
      );
      data = response.data.hits;
      imagesData = data;
      lastCategory = category;
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from API');
    }
  }
  try {
    if (sortBy === 'id') {// sort the data by id
      data.sort((a, b) => a.id - b.id);
    } else if (sortBy === 'date') { // sort the data by date
      // slice the dater from the previewURL and sort by it from the latest to the new.
      data.sort((a, b) =>
        moment(b.previewURL.slice(30, 46), 'YYYY/MM/DD/HH/mm') - moment(a.previewURL.slice(30, 46), 'YYYY/MM/DD/HH/mm'));
    } else {
      // Invalid sortBy parameter
      res.status(400).send(`Invalid sortBy parameter: ${sortBy}`);
      return;
    }
    //pagination function
    const limit = 9
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = data.slice(startIndex, endIndex);
    const totalItems = data.length;
    // send the results back to the front
    res.send({
      items: paginatedData,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems: totalItems
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data from API');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
