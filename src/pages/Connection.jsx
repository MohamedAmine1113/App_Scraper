
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Connection() {
 const [token, setToken] = useState("");
 const navigate = useNavigate();

 const testConnection = async () => {
  try {
    const response = await fetch(
      "http://localhost:5678/webhook-test/test_apify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      localStorage.setItem("apifyToken", token);
      alert("✅ Verbindung erfolgreich");
      navigate("/form");

    } else if (result.reason === "LIMIT_REACHED") {
      alert("⚠️ Dein Apify-Konto hat das monatliche Nutzungslimit erreicht. Bitte verwende ein anderes Apify-Konto oder upgrade deinen Plan.");
    } else {
      alert("❌ Ungültiger API Token");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Fehler bei der Verbindung");
  }
};


  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

        {/* Header */}
        <div className="border-b border-slate-200 p-8">
          <h1 className="text-center text-3xl font-bold text-slate-900">
            Connect your Apify Account
          </h1>

          <p className="mt-4 text-center text-slate-600">
            This application uses <span className="font-semibold">YOUR</span>{" "}
            Apify account to run Google Maps scraping jobs.
          </p>

          <div className="mx-auto mt-8 max-w-md space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-green-600">✔</span>
              <span>You control your usage</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-600">✔</span>
              <span>You manage your own billing</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-600">✔</span>
              <span>Your API key stays private</span>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <div className="border-b border-slate-200 p-8">
          <span className="text-sm font-semibold text-blue-600">
            STEP 1
          </span>

          <h2 className="mt-2 text-xl font-semibold">
            Create a free Apify account
          </h2>

          <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700" onClick={() => window.open("https://my.apify.com/register", "_blank")}>
            Create Apify Account
          </button>
        </div>

        {/* Step 2 */}
        <div className="border-b border-slate-200 p-8">
          <span className="text-sm font-semibold text-blue-600">
            STEP 2
          </span>

          <h2 className="mt-2 text-xl font-semibold">
            Login to Apify
          </h2>

          <div className="mt-5 rounded-xl bg-slate-100 p-4 text-slate-700">
            <p>Settings</p>
            <p>→ Integrations</p>
            <p>→ Create API Token</p>
            <p>→ API</p>
          </div>

          <p className="mt-5 text-slate-600">
            Copy your Personal API Token.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-8">
          <span className="text-sm font-semibold text-blue-600">
            STEP 3
          </span>

          <h2 className="mt-2 text-xl font-semibold">
            Enter your API Token
          </h2>

          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="apify_api_xxxxxxxxxxxxxxxxx"
            className="mt-5 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          <button 
            className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700" 
            onClick={testConnection}
            >
            Test Connection
          </button>
        </div>

      </div>
    </div>
  )
}

export default Connection