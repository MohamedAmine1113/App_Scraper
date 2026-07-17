import { useState } from "react";


function ScraperForm() {
  const [formData, setFormData] = useState({
    keyword: "",
    location: "",
    maxResults: "100",
    output: "json",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const startScraping = async () => {
    const token = localStorage.getItem("apifyToken");

    if (!token) {
      alert("Please connect your Apify account first.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5678/webhook/google-maps",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            keyword: formData.keyword,
            location: formData.location,
            maxResults: Number(formData.maxResults),
          }),
        }
      );

      const result = await response.json();
      console.log(result);

      
    } catch (error) {
      console.error(error);
      alert("An error occurred during scraping.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Google Maps Scraper
        </h1>

        <div className="space-y-6">

          <div>
            <label className="block font-medium mb-2">
              Business Keyword
            </label>

            <input
              name="keyword"
              value={formData.keyword}
              onChange={handleChange}
              placeholder="Restaurant"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Location
            </label>

            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Berlin"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Maximum Results
            </label>

            <input
              type="number"
              name="maxResults"
              value={formData.maxResults}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Output : CVS
            </label>

          </div>

          <button
            onClick={startScraping}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
          >
            Start Google Maps Scraping
          </button>

        </div>
      </div>
    </div>
  );
}

export default ScraperForm;