import {useState, useEffect} from "react";

export default function Home() {
    const [catUrl, setCatUrl] = useState(null);

    async function loadCat() {
        try {
            const res = await fetch("https://api.thecatapi.com/v1/images/search");
            const data = await res.json();
            setCatUrl(data[0].url);
        } catch (err) {
            alert("Failed to load cat image. Try again!");
        }
    }

    useEffect(() => {
        loadCat();
    }, []);

  return (
    <div className="flex-col items-baseline gap-3 bg-violet-200 p-4 rounded-lg">
      <p>Born and raised in <a href="https://en.wikipedia.org/wiki/Hong_Kong" className = "hover:underline hover:text-blue-500">Hong Kong</a>, I moved to the UK to study Computer Science.</p>
      <p>In my free time, I enjoy playing video games, coding, and sleeping!</p>
      <br></br>
      <p>Besides coding, I am an avid cat lover too!</p>
      <p>Have some cat pictures!! (Unfortunately, I don't own any of them)</p>

      {catUrl && (
      <img src={catUrl} className = "max-w-2xl max-h-2xl m-5" alt="Random cat" />
      )}

      <button onClick={loadCat} className = "bg-gray-200 hover:bg-gray-300 rounded-lg p-2"> Get a new cat picture! </button>
    </div>
  );
}