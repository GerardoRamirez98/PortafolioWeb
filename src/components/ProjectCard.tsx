type Props = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <a
        href={link}
        className="text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver proyecto →
      </a>
    </div>
  );
}
