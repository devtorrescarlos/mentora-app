"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

interface UsersPaginationProps {
  page: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

function getPageNumbers(
  currentPage: number,
  totalPages: number,
): (number | "ellipsis")[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const visiblePages = Array.from(
    new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]),
  )
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  const pages: (number | "ellipsis")[] = [];

  visiblePages.forEach((page, index) => {
    const previousPage = visiblePages[index - 1];

    if (previousPage && page - previousPage > 1) {
      pages.push("ellipsis");
    }

    pages.push(page);
  });

  return pages;
}

export function UsersPagination({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: UsersPaginationProps) {
  if (totalItems === 0) {
    return null;
  }

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);
  const pageNumbers = getPageNumbers(page, totalPages);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-center text-xs text-muted-foreground sm:text-left">
        Mostrando {start}–{end} de {totalItems} usuarios
      </p>

      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <span className="text-xs text-muted-foreground sm:hidden">
          Página {page} de {totalPages}
        </span>

        <Pagination
          aria-label="Paginación de usuarios"
          className="mx-0 w-auto justify-center sm:justify-end"
        >
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                aria-label="Página anterior"
              >
                <ChevronLeft />
                <span className="hidden sm:inline">Anterior</span>
              </Button>
            </PaginationItem>

            {pageNumbers.map((pageNumber, index) =>
              pageNumber === "ellipsis" ? (
                <PaginationItem
                  key={`ellipsis-${index}`}
                  className="hidden sm:block"
                >
                  <span className="flex size-8 items-center justify-center text-xs text-muted-foreground">
                    …
                  </span>
                </PaginationItem>
              ) : (
                <PaginationItem key={pageNumber} className="hidden sm:block">
                  <Button
                    variant={pageNumber === page ? "default" : "ghost"}
                    size="icon-sm"
                    onClick={() => onPageChange(pageNumber)}
                    aria-label={`Ir a la página ${pageNumber}`}
                    aria-current={pageNumber === page ? "page" : undefined}
                  >
                    {pageNumber}
                  </Button>
                </PaginationItem>
              ),
            )}

            <PaginationItem>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                aria-label="Página siguiente"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
