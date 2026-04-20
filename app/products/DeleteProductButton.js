'use client';
import { useRouter } from 'next/navigation';


export default function DeleteProductButton({ productId }) {
  const router = useRouter();
  async function handleDelete() {
    if (confirm('Are you sure you want to delete this product?')) {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        router.push('/products');
      } else {
        alert('Failed to delete product');
      }
    }
  }

  return (
    <button className="delete-button" onClick={handleDelete}>
      Delete
    </button>
  );
}
