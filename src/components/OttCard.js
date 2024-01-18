const OttCard = ({ title }) => {
  return (
    <div className="m-4 w-[250px] h-[300px] overflow-hidden rounded-lg transform transition-transform scale-100 hover:scale-95">
      <img
        src={`./images/${title}.jpg`}
        alt={title}
        className="rounded-xl w-full h-48"
      />
      <h3 className="px-2 py-1 text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default OttCard;
