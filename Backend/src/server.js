import app from "./app.js";
import functions from "firebase-functions";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
exports.api = functions.https.onRequest(app);
