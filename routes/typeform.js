const express = require("express");
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests 
const typeformRoutes = express.Router();


typeformRoutes.get("/api/typeform/getresult", async (req, res) => {
    try {
        const apiKey = 'tfp_57VYm1iUBg8iFzX21vEdmfwNLLARx3H1ukQMRNRdcBMH_3w5rBQWRVcFkN9';
        const formId = 'vL8do7c1';
        const response = await fetch(`https://api.typeform.com/forms/${formId}/responses`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json()
        res.json(data);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = typeformRoutes;