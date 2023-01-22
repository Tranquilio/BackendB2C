
    // Make a request to the Typeform API to retrieve the responses for the form
//     const result = fetch(`https://api.typeform.com/forms/${formId}/responses`, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${apiKey}`,
//             'Content-Type': 'application/json'
//         }
//     })
//     body = result.json()
//   }



// app.listen(5000, () => { console.log("Server started on port 5000") })


const express = require("express");
const PORT = 5000
const app = express();

app.use(express.urlencoded({ extended: true }));
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(require("./routes/typeform"));
 
app.listen(PORT, () => { console.log("Server started on port 5000") })


