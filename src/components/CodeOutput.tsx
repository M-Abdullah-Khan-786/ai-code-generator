export default function CodeOutput({ code }: { code: string }) {
  return (
    <pre className="bg-gray-900 text-green-300 p-4 rounded overflow-x-auto mt-6 text-sm">
      <code>{code}</code>
    </pre>
  );
}
