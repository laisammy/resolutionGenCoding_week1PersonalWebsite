export default function Projects () {
    return (
        <div className = "flex-col items-baseline gap-3 bg-violet-300 p-4 rounded-lg">
            <p>
                I mostly code in <b>Lua and Python</b>, but I am also learning{" "}<b>JavaScript, Java, GDScript and C++</b>.
            </p>
            <p> Here are some of the projects I've done: </p>
            <div className="flex-col">
                <a href="https://www.roblox.com/games/82479517875218/This-This-Rice" className="font-bold underline hover:bg-purple-200"> This This Rice </a>
                <img src="src/assets/06022026_thumbnail.png" className="max-w-2xl max-h-2xl m-5" alt="This This Rice Thumbnail"/>

                <a href="https://laisammy.itch.io/knight-platformer-game" className="font-bold underline hover:bg-purple-200"> Knight Platformer Game </a>
                <img src="src/assets/Screenshot 2026-02-26 203638.png" className="max-w-2xl max-h-2xl m-5" alt="Knight Platformer Game Thumbnail"/>
            </div>
        </div>
    );
}