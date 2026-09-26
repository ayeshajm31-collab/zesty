import { useEffect, useState } from "react";
import { supabase } from "../LIB/supabaseClient";
import { Link } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log("Error fetching products:", error);
        return;
      }

      setProducts(data);
    };

    fetchProducts();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();

    if (!name || !price) return;

    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          name: name,
          price: Number(price),
          image_url: imageUrl,
          category: category,
        },
      ])
      .select();

    if (error) {
      console.log("Error adding product:", error);
      return;
    }

    setProducts([...products, data[0]]);

    setName("");
    setPrice("");
    setImageUrl("");
    setCategory("");
  };

  const deleteProduct = async (id) => {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("Error deleting product:", error);
      return;
    }

    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = async (id) => {
    const { error } = await supabase
      .from("products")
      .update({
        name: name,
        price: Number(price),
        image_url: imageUrl,
        category: category,
      })
      .eq("id", id);

    if (error) {
      console.log("Error updating product:", error);
      return;
    }

    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              name: name,
              price: Number(price),
              image_url: imageUrl,
              category: category,
            }
          : product
      )
    );

    setEditingId(null);
    setName("");
    setPrice("");
    setImageUrl("");
    setCategory("");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2] p-8">
        <Link
  to="/admin"
  className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-white px-5 py-2.5 text-sm font-medium text-[#315C4B] shadow-sm transition duration-300 hover:border-[#315C4B] hover:bg-[#F1EBDD]"
>
  <span>←</span>
  Back to Dashboard
</Link>

      <h1 className="text-3xl font-bold text-[#315C4B]">
        Manage Products
      </h1>

      <form
        onSubmit={(e) => {
          if (editingId) {
            e.preventDefault();
            updateProduct(editingId);
          } else {
            addProduct(e);
          }
        }}
        className="mt-8 max-w-lg rounded-xl bg-white p-6 shadow-sm"
      >
        <h2 className="mb-5 text-xl font-semibold">
          {editingId ? "Edit Product" : "Add New Product"}
        </h2>

        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <input
          type="number"
          placeholder="Price in Rs."
          min="1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        >
          <option value="">Select Category</option>
          <option value="Seafood">Seafood</option>
          <option value="Chicken">Chicken</option>
          <option value="Beef">Beef</option>
          <option value="Dessert">Dessert</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>

        <button
          type="submit"
          className="rounded-lg bg-[#315C4B] px-6 py-3 text-white"
        >
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      <h2 className="mt-10 text-2xl font-semibold">
        All Products
      </h2>

      <div className="mt-5 space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">
              {product.image_url && (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-20 w-20 rounded-lg object-cover"
                />
              )}

              <div>
                <h3 className="font-semibold">{product.name}</h3>

                <p>Rs. {product.price}</p>

                {product.category && (
                  <p className="mt-1 text-sm text-gray-500">
                    Category: {product.category}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setEditingId(product.id);
                  setName(product.name);
                  setPrice(product.price);
                  setImageUrl(product.image_url || "");
                  setCategory(product.category || "");
                }}
                className="rounded-lg bg-[#315C4B]/10 px-4 py-2 text-[#315C4B]"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product.id)}
                className="rounded-lg bg-red-50 px-4 py-2 text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProducts;