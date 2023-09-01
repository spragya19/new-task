import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";

import { TbArrowsSort } from "react-icons/tb";

import { formatCurrency, convertToUsd } from "../../utils/currencyUtils";

import { data } from "../../dummydata";

const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor("date", {
    cell: (info) => info.getValue(),
    header: () => <span>Transaction Date</span>,
  }),
  columnHelper.accessor("invoiceNo", {
    cell: (info) => (
      <Link className="underline text-[#2590e1]" to={`transaction/${info.row.original.id}`}>
        {info.getValue()}
      </Link>
    ),
    header: () => <span>Invoice No.</span>,
  }),
  columnHelper.accessor("payer", {
    cell: (info) => info.getValue(),
    header: () => <span>Payer</span>,
  }),
  columnHelper.accessor("payee", {
    cell: (info) => info.getValue(),
    header: () => <span>Payee</span>,
  }),
  columnHelper.accessor("amount", {
    cell: (info) => <span> &#x20b9; {formatCurrency(info.getValue())}</span>,
    header: () => <span>Amount</span>,
  }),
  columnHelper.accessor("usd_amount", {
    cell: (info) => {
      return <span>$ {convertToUsd(info.row.original.amount)}</span>;
    },
    header: () => <span>USD Equivalent</span>,
  }),
  columnHelper.accessor("status", {
    //info.getValue(),
    cell: (info) => {
      const val = info.getValue();
      return (
        <>
          <div>
            <span className={`status ${val >= 1 ? "active" : ""}`}>
              {val >= 1 && <span>First</span>}
            </span>
            <span className={`status ${val >= 2 ? "active" : ""}`}>
              {val >= 2 && <span>Second</span>}
            </span>
            <span className={`status ${val >= 3 ? "active" : ""}`}>
              {val >= 3 && <span>Third</span>}
            </span>
          </div>
        </>
      );
    },
    header: () => <span>Status</span>,
  }),
];

const TransactionTable = () => {
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="">
      <div className="shadow overflow-hidden border-2 border-[#dadedf] sm:rounded-lg">
        {/* className="mx-auto border-2 border-[#dadedf] rounded-md */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="px-6 py-2 text-left text-[#333] text-[15px] font-medium tracking-wider"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                    <span
                      className="w-[12px] h-[15px] ml-[10px] inline-block text-[19px] cursor-pointer hover:text-gray-500"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <TbArrowsSort />
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className="px-6 text-sm font-medium text-[#bcbabf] py-3 whitespace-nowrap"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
          {/* <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
