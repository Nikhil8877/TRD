import express, { Request, Response } from 'express';
import { Product } from './product';

const app = express();
app.use(express.json());

let products: Product[] = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 20 }
];


app.get('/api/products', (_req: Request, res: Response) => {
  res.json(products);
});


app.get('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const product = products.find(prod => prod.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});


app.post('/api/products', (req: Request, res: Response) => {
  const newProduct: Product = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});


app.put('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const updatedProduct: Product = req.body;

  const index = products.findIndex(prod => prod.id === productId);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).send('Product not found');
  }
});


app.delete('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(prod => prod.id === productId);
  if (index !== -1) {
    products.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Product not found');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
