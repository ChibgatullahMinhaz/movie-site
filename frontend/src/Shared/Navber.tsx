import { useMemo, useState, type JSX } from 'react'

const movies = [
    "Avatar",
    "Avengers",
    "Batman",
    "Black Panther",
    "Coco",
    "Deadpool",
    "Dune",
    "Interstellar",
    "Inception",
    "Joker",
    "John Wick",
    "Spider-Man",
    "Superman",
];
export default function Navber(): JSX.Element {

    const [holdChar, setChar] = useState<string | null>(null);

    const alphabet = useMemo(() => {
        const chars: string[] = [];
        for (let i = 97; i <= 122; i++) {
            chars.push(String.fromCharCode(i));
        }
        return chars;
    }, []);

    const handleCharClick = (char: string) => {
        setChar(char);
        console.log(`Clicked character: ${char}`);
    };
    // Filter movies based on selected letter
    const filteredMovies = useMemo(() => {
        if (!holdChar) return [];
        return movies.filter((movie) =>
            movie.toLowerCase().startsWith(holdChar.toLowerCase())
        );
    }, [holdChar]);
    return (
        <>
            <div className='h-16 navber flex items-center px-4 border-b border-gray-300'>
                <img src="https://play-lh.googleusercontent.com/v5vEidszeire-QyISwhoNCLTie7c3GG_46l8EltqmIHqBqgfxj8_tjBKV-EQbd116J0" alt="logo" className='h-8' />
            </div>

            <div className='overflow-x-auto no-scrollbar'>
                {/* <ul
                    id='alphabet'
                    className='flex justify-between flex-row min-w-max sm:justify-between gap-4 p-2'
                >
                    
                    <li  className='p-2'>#</li>
                    {alphabet.map((letter) => (
                        <li
                            className='p-2 cursor-pointer hover:text-blue-500'
                            onClick={() => handleCharClick(letter)}
                            key={letter}
                        >
                            {letter}
                        </li>
                    ))}
                </ul> */}

                <ul
                    id="alphabet"
                    className="flex justify-between flex-row min-w-max sm:justify-between gap-4 p-2"
                >
                    <li
                        className={`p-2 cursor-pointer ${holdChar === '#' ? 'selected-letter' : ''
                            }`}
                        onClick={() => handleCharClick('#')}
                    >
                        #
                    </li>
                    {alphabet.map((letter) => (
                        <li
                            key={letter}
                            className={`p-2 alpabet cursor-pointer text-blue-500 ${holdChar === letter ? 'selected-letter' : ''
                                }`}
                            onClick={() => handleCharClick(letter)}
                        >
                            {letter}
                        </li>
                    ))}
                </ul>

            </div>
            {/* Movie List */}
            <div className="px-4">
                {holdChar && (
                    <div className="absolute top-32 left-0 w-full z-50">
                        <div className="max-w-6xl mx-auto dark:bg-slate-800 shadow-lg rounded-xl p-4">
                            {filteredMovies.length > 0 ? (
                                <div>
                                    <h2 className="text-lg font-semibold mb-2">
                                        Movies starting with “{holdChar.toUpperCase()}”
                                    </h2>
                                    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                        {filteredMovies.map((movie) => (
                                            <li
                                                key={movie}
                                                className="border p-3 rounded-lg shadow-sm hover:shadow-md transition"
                                            >
                                                🎬 {movie}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                               ''
                            )}
                        </div>
                    </div>
                )}
            </div>

        </>
    );
}
