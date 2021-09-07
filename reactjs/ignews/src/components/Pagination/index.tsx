import styles from './pagination.module.scss';
import { PaginationItem } from './PaginationItem';

type PaginationProps = {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 1;

function generatePageArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);

  console.log(totalCountOfRegisters);

  const previousPages = currentPage > 1
    ? generatePageArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePageArray(
      currentPage,
      Math.min(currentPage + siblingsCount, lastPage),
    )
    : [];

  function handlePreviousPages() {
    // TODO
  }

  function handleNextPages() {
    // TODO
  }

  return (
    <div className={styles.container}>
      <div>
        <strong>0</strong> - <strong>10</strong> de <strong>10</strong>
      </div>
      <div>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem
              numberPage={1}
              onPageChange={onPageChange}
              isCurrentPage
            />
            {currentPage > 2 + siblingsCount && <span>...</span>}
          </>
        )}

        {previousPages.length > 0
          && previousPages.map((page) => (
            <PaginationItem
              key={page}
              numberPage={page}
              onPageChange={onPageChange}
            />
          ))}

        <PaginationItem
          numberPage={currentPage}
          onPageChange={onPageChange}
          isCurrentPage
        />

        {nextPages.length > 0
          && nextPages.map((page) => (
            <PaginationItem
              key={page}
              numberPage={page}
              onPageChange={onPageChange}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + (1 + siblingsCount) < lastPage && <span>...</span>}
            <PaginationItem
              numberPage={lastPage}
              onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}
