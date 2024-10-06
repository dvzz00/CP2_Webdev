import SingleProject from "./SProjeto";
import data from "./projetosData";

const Projeto = () => {
  return (
    <main className="px-5  max-w-[800px] mx-auto flex-1">
      <div className="pb-8 pt-20">
        <h2 className="text-3xl font-bold text-gray-700">Projetos</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item, i) => (
          <SingleProject key={i} projeto={item} />
        ))}
      </div>
    </main>
  );
};

export default Projeto;
