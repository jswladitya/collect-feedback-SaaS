"use client";
import React, { useState } from "react";
import { InferSelectModel } from "drizzle-orm";
import { feedbacks } from "@/db/schema";
import { Copy, Check } from 'lucide-react';
import { Meteors } from "@/components/ui/meteors";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Feedback = InferSelectModel<typeof feedbacks>;

const ITEMS_PER_PAGE = 6;

const FeedbackCard = ({ feedback }: { feedback: Feedback }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (feedback.userEmail) {
      navigator.clipboard.writeText(feedback.userEmail);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <div className="relative w-full cursor-pointer">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <h1 className="relative z-50 text-lg font-bold text-white">Name: {feedback.userName}</h1>
          <div className="relative z-50 mb-4 flex w-full items-center justify-between">
            <span className="truncate text-sm font-normal text-slate-400">Email: {feedback.userEmail || "Not provided"}</span>
            {feedback.userEmail && (
              <button
                onClick={handleCopy}
                className="rounded-lg p-1.5 transition-colors hover:bg-gray-700"
                aria-label="Copy email"
              >
                {isCopied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-400" />
                )}
              </button>
            )}
          </div>
          <p className="relative z-50 text-base font-normal text-slate-300 truncate">Feedback: {feedback.message}</p>
          <Meteors number={10} />
        </div>
      </div>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Feedback</AlertDialogTitle>
        <AlertDialogDescription className="py-4 text-base">
          {feedback.message}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Close</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  );
};

function Table({ data }: { data: Feedback[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const renderPagination = () => {
    const pageNumbers = [];
    const ellipsis = <PaginationEllipsis key="ellipsis" />;

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink href="#" isActive={currentPage === i} onClick={() => handlePageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (totalPages <= 5) {
      return pageNumbers;
    }

    const startPages = pageNumbers.slice(0, 2);
    const endPages = pageNumbers.slice(totalPages - 2, totalPages);

    if (currentPage > 2 && currentPage < totalPages - 1) {
      return [
        ...startPages,
        ellipsis,
        pageNumbers[currentPage - 1],
        ellipsis,
        ...endPages,
      ];
    } else if (currentPage <= 2) {
      return [...startPages, ellipsis, ...endPages];
    } else {
      return [...startPages, ellipsis, ...endPages];
    }
  };

  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedData.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={() => handlePageChange(currentPage - 1)} />
              </PaginationItem>
              {renderPagination()}
              <PaginationItem>
                <PaginationNext href="#" onClick={() => handlePageChange(currentPage + 1)} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default Table;
