const btn = "px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90";

const colors = ["rose", "pink", "orange", "fuchsia", "purple", "violet", "indigo", "blue", "sky", "cyan", "teal", "emerald", "green", "lime", "yellow", "amber", "red", "stone", "neutral", "zinc", "gray", "slate"];

//btn and colors variables are not being used

const variants = {
    rose: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-rose-500 text-white',
    'rose-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-rose-700 text-white',
    'rose-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-rose-500 text-rose-500 bg-rose-50 hover:bg-rose-500 hover:text-white',
    'rose-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-rose-500 bg-rose-50 hover:bg-rose-500 hover:text-white',
    'rose-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-rose-500 bg-rose-50',
    pink: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-pink-500 text-white',
    'pink-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-pink-700 text-white',
    'pink-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-pink-500 text-pink-500 bg-pink-50 hover:bg-pink-500 hover:text-white',
    'pink-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-pink-500 bg-pink-50 hover:bg-pink-500 hover:text-white',
    'pink-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-pink-500 bg-pink-50',
    orange: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-orange-500 text-white',
    'orange-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-orange-700 text-white',
    'orange-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-orange-500 text-orange-500 bg-orange-50 hover:bg-orange-500 hover:text-white',
    'orange-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-orange-500 bg-orange-50 hover:bg-orange-500 hover:text-white',
    'orange-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-orange-500 bg-orange-50',
    fuchsia: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-fuchsia-500 text-white',
    'fuchsia-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-fuchsia-700 text-white',
    'fuchsia-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-fuchsia-500 text-fuchsia-500 bg-fuchsia-50 hover:bg-fuchsia-500 hover:text-white',
    'fuchsia-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-fuchsia-500 bg-fuchsia-50 hover:bg-fuchsia-500 hover:text-white',
    'fuchsia-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-fuchsia-500 bg-fuchsia-50',
    purple: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-purple-500 text-white',
    'purple-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-purple-700 text-white',
    'purple-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-purple-500 text-purple-500 bg-purple-50 hover:bg-purple-500 hover:text-white',
    'purple-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-purple-500 bg-purple-50 hover:bg-purple-500 hover:text-white',
    'purple-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-purple-500 bg-purple-50',
    violet: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-violet-500 text-white',
    'violet-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-violet-700 text-white',
    'violet-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-violet-500 text-violet-500 bg-violet-50 hover:bg-violet-500 hover:text-white',
    'violet-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-violet-500 bg-violet-50 hover:bg-violet-500 hover:text-white',
    'violet-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-violet-500 bg-violet-50',
    indigo: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-indigo-500 text-white',
    'indigo-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-indigo-700 text-white',
    'indigo-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-indigo-500 text-indigo-500 bg-indigo-50 hover:bg-indigo-500 hover:text-white',
    'indigo-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-indigo-500 bg-indigo-50 hover:bg-indigo-500 hover:text-white',
    'indigo-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-indigo-500 bg-indigo-50',
    blue: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-blue-500 text-white',
    'blue-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-blue-700 text-white',
    'blue-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-blue-500 text-blue-500 bg-blue-50 hover:bg-blue-500 hover:text-white',
    'blue-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-blue-500 bg-blue-50 hover:bg-blue-500 hover:text-white',
    'blue-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-blue-500 bg-blue-50',
    sky: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-sky-500 text-white',
    'sky-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-sky-700 text-white',
    'sky-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-sky-500 text-sky-500 bg-sky-50 hover:bg-sky-500 hover:text-white',
    'sky-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-sky-500 bg-sky-50 hover:bg-sky-500 hover:text-white',
    'sky-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-sky-500 bg-sky-50',
    cyan: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-cyan-500 text-white',
    'cyan-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-cyan-700 text-white',
    'cyan-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-cyan-500 text-cyan-500 bg-cyan-50 hover:bg-cyan-500 hover:text-white',
    'cyan-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-cyan-500 bg-cyan-50 hover:bg-cyan-500 hover:text-white',
    'cyan-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-cyan-500 bg-cyan-50',
    teal: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-teal-500 text-white',
    'teal-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-teal-700 text-white',
    'teal-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-teal-500 text-teal-500 bg-teal-50 hover:bg-teal-500 hover:text-white',
    'teal-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-teal-500 bg-teal-50 hover:bg-teal-500 hover:text-white',
    'teal-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-teal-500 bg-teal-50',
    emerald: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-emerald-500 text-white',
    'emerald-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-emerald-700 text-white',
    'emerald-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-emerald-500 text-emerald-500 bg-emerald-50 hover:bg-emerald-500 hover:text-white',
    'emerald-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-emerald-500 bg-emerald-50 hover:bg-emerald-500 hover:text-white',
    'emerald-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-emerald-500 bg-emerald-50',
    green: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-green-500 text-white',
    'green-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-green-700 text-white',
    'green-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-green-500 text-green-500 bg-green-50 hover:bg-green-500 hover:text-white',
    'green-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-green-500 bg-green-50 hover:bg-green-500 hover:text-white',
    'green-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-green-500 bg-green-50',
    lime: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-lime-500 text-white',
    'lime-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-lime-700 text-white',
    'lime-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-lime-500 text-lime-500 bg-lime-50 hover:bg-lime-500 hover:text-white',
    'lime-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-lime-500 bg-lime-50 hover:bg-lime-500 hover:text-white',
    'lime-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-lime-500 bg-lime-50',
    yellow: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-yellow-500 text-white',
    'yellow-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-yellow-700 text-white',
    'yellow-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-yellow-500 text-yellow-500 bg-yellow-50 hover:bg-yellow-500 hover:text-white',
    'yellow-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-yellow-500 bg-yellow-50 hover:bg-yellow-500 hover:text-white',
    'yellow-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-yellow-500 bg-yellow-50',
    amber: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-amber-500 text-white',
    'amber-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-amber-700 text-white',
    'amber-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-amber-500 text-amber-500 bg-amber-50 hover:bg-amber-500 hover:text-white',
    'amber-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-amber-500 bg-amber-50 hover:bg-amber-500 hover:text-white',
    'amber-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-amber-500 bg-amber-50',
    red: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-red-500 text-white',
    'red-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-red-700 text-white',
    'red-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-red-500 text-red-500 bg-red-50 hover:bg-red-500 hover:text-white',
    'red-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-red-500 bg-red-50 hover:bg-red-500 hover:text-white',
    'red-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-red-500 bg-red-50',
    stone: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-stone-500 text-white',
    'stone-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-stone-700 text-white',
    'stone-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-stone-500 text-stone-500 bg-stone-50 hover:bg-stone-500 hover:text-white',
    'stone-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-stone-500 bg-stone-50 hover:bg-stone-500 hover:text-white',
    'stone-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-stone-500 bg-stone-50',
    neutral: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-neutral-500 text-white',
    'neutral-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-neutral-700 text-white',
    'neutral-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-neutral-500 text-neutral-500 bg-neutral-50 hover:bg-neutral-500 hover:text-white',
    'neutral-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-neutral-500 bg-neutral-50 hover:bg-neutral-500 hover:text-white',
    'neutral-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-neutral-500 bg-neutral-50',
    zinc: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-zinc-500 text-white',
    'zinc-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-zinc-700 text-white',
    'zinc-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-zinc-500 text-zinc-500 bg-zinc-50 hover:bg-zinc-500 hover:text-white',
    'zinc-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-zinc-500 bg-zinc-50 hover:bg-zinc-500 hover:text-white',
    'zinc-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-zinc-500 bg-zinc-50',
    gray: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-gray-500 text-white',
    'gray-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-gray-700 text-white',
    'gray-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-gray-500 text-gray-500 bg-gray-50 hover:bg-gray-500 hover:text-white',
    'gray-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-gray-500 bg-gray-50 hover:bg-gray-500 hover:text-white',
    'gray-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-gray-500 bg-gray-50',
    slate: 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-slate-500 text-white',
    'slate-dark': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 bg-slate-700 text-white',
    'slate-outlined': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-slate-500 text-slate-500 bg-slate-50 hover:bg-slate-500 hover:text-white',
    'slate-light': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-slate-500 bg-slate-50 hover:bg-slate-500 hover:text-white',
    'slate-text': 'px-5 py-2 border rounded-md duration-200 hover:brightness-95 active:brightness-90 border-none text-slate-500 bg-slate-50'
};


export default variants;