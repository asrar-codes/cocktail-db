import { Link } from "react-router-dom";
const Cocktail = ({ id, title, name, alcoholic, img, cocktailPageProps }) => {
  return (
    <article className="cocktail drop-shadow-xl shadow-inner transition-all hover:scale-105">
      <img src={img} alt={name} className=" object-cover object-center" />
      <div className="info p-6">
        <h2 className="text-xl font-semibold ">{title}</h2>
        <p className="font-pop text-lg text-gray-800">{name}</p>
        <p className="font-ubuntu font-semibold tracking-wide text-gray-700">
          {alcoholic}
        </p>

        <Link
          to={`cocktail/${id}`}
          className=" inline-block bg-orange-200 p-2 rounded-md capitalize "
        >
          more info
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
