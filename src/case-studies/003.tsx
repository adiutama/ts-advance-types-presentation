import React from "react"

export const JustATable = ({ columns, data }: JustATableProps) => (
  <table>
    <thead>
      <tr>
        {columns.map(item => (
          <td key={item.key}>{item.text}</td>
        ))}
      </tr>
    </thead>

    <tbody>
      {data.map((item) => (
        <tr>
          <td key={item.id}>{item.text}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

// =========================================

type JustATableProps = {
  columns: Record<string, any>[],
  data: Record<string, any>[]
}