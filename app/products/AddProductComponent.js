'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './products.css';

export default function AddProductComponent({ onClose }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const newProduct = { name, price, type, description };

    const response = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    });

    if (response.ok) {
      onClose();
      router.push('/products');
    }
  }


  return (
    <div className="add-product-container">
      <div className="add-product-form">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text" className="form-control" value={name}
            onChange={(e) => setName(e.target.value)} required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            step="0.01"
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <input
            type="text" className="form-control" value={type}
            onChange={(e) => setType(e.target.value)} required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control" value={description}
            onChange={(e) => setDescription(e.target.value)} required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Product</button>
        </form>
      </div>
    </div>
  );
}