import { TableData } from "@/types/caseStudy";

export default function CaseStudyTable({ table }: { table: TableData }) {
  return (
    <div className="overflow-x-auto border border-line rounded">
      <table className="w-full text-small">
        <thead>
          <tr className="border-b border-line bg-stone-200">
            {table.headers.map((header, i) => (
              <th key={i} className="text-left font-semibold text-ink px-4 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-b border-line last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="text-ink-muted px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
          {table.footer && (
            <tr>
              <td
                colSpan={table.headers.length}
                className="text-ink font-semibold px-4 py-3"
              >
                {table.footer}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

