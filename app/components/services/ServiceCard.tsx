export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition duration-300 p-6 rounded-2xl text-left border border-gray-100">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
}
