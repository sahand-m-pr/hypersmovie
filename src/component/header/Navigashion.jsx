
export default function Navigation() {
  return (
    <nav className="container max-w-5xl px-4 mx-auto  flex items-center text-slate-300  ">
      <div className="flex items-center">
        <h1 className="text-3xl font-semibold  mr-20 ">Hypers<span className="text-rose-500">Movie</span><p className="text-xs text-center text-slate-500">Film Review</p></h1>
        <ul className="flex gap-12 ml-3 items-center font-serif uppercase" >
          <li>
            <a href="#">movies</a>
          </li>
          <li>
            <a href="#">tv show</a>
          </li>
          <li>
            <a href="#">people</a>
          </li>
          <li>
            <a href="#">more</a>
          </li>
        </ul>
      </div>
      <div className="ml-auto ">
        <ul className="flex gap-3 uppercase">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a className="bg-rose-700 hover:bg-rose-500 px-6 py-3 rounded-2xl text-white" href="#">Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
