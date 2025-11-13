"use client";

type DeleteButtonProps = {
  id: string;
  onDelete: (id: string) => void;
};

export default function DeleteButton({ id, onDelete }: DeleteButtonProps) {
  const handleClick = () => {
    const confirmDelete = confirm("آیا مطمئنی می‌خواهی حذف کنی؟");
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
}
