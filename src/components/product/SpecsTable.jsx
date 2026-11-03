// Specifications table: name on the left, value on the right.
// "specs" is a list like [{ label: "Power", value: "1.5 kW" }]
export default function SpecsTable({ specs = [] }) {
  if (specs.length === 0) return null;

  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">Specifications</h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-left text-sm sm:text-base">
          <tbody>
            {specs.map(({ label, value }, index) => (
              <tr key={label} className={index % 2 === 0 ? "bg-soft" : "bg-white"}>
                <th scope="row" className="w-1/2 px-4 py-3 align-top font-medium text-muted">
                  {label}
                </th>
                <td className="px-4 py-3 text-right font-semibold text-ink sm:text-left">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}