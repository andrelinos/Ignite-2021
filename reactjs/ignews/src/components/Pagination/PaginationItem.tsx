import styles from './paginationItem.module.scss';

type PaginationItemProps = {
  numberPage: number;
  isCurrentPage?: boolean;
  onPageChange: (page: number) => void;
};

export function PaginationItem({
  isCurrentPage = false,
  onPageChange,
  numberPage,
}: PaginationItemProps) {
  return isCurrentPage ? (
    <button type="button" className={styles.currentButton} disabled>
      {numberPage}
    </button>
  ) : (
    <button
      type="button"
      className={styles.buttonItem}
      onClick={() => onPageChange(numberPage)}
    >
      {numberPage}
    </button>
  );
}
