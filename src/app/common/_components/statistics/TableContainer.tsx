import React from "react";
import { Pagination, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";

export interface Column {
    key: string;
    title: string;
}

interface TableContainerProps {
    columns: Column[];
    data: Record<string, any>[];
    pageSize?: number;
}

export const TableContainer: React.FC<TableContainerProps> = ({
                                                                  columns,
                                                                  data,
                                                                  pageSize = 10,
                                                              }) => {
    const [page, setPage] = React.useState(1);
    const totalPages = Math.ceil(data.length / pageSize);
    const start = (page - 1) * pageSize;
    const pageData = data.slice(start, start + pageSize);

    return (
        <div className="space-y-4">
            <Table
                aria-label="Data table"
                shadow="none"
                classNames={{
                    base: "border border-content3 rounded-lg",
                    th: "bg-content2/70 text-foreground/80 font-medium",
                    td: "text-foreground/90"
                }}
            >
                <TableHeader>
                    {columns.map((column) => (
                        <TableColumn key={column.key}>{column.title}</TableColumn>
                    ))}
                </TableHeader>
                <TableBody>
                    {pageData.map((row, index) => (
                        <TableRow
                            key={index}
                            className={index % 2 === 0 ? "bg-content1" : "bg-content2/30"}
                        >
                            {columns.map((column) => (
                                <TableCell key={column.key}>
                                    {column.key === "rank" ? (
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      {row[column.key]}
                    </span>
                                    ) : (
                                        row[column.key]
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                    <Pagination
                        total={totalPages}
                        page={page}
                        onChange={setPage}
                        color="primary"
                        showControls
                        size="sm"
                    />
                </div>
            )}
        </div>
    );
};