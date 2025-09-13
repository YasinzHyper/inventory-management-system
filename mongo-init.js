// MongoDB initialization script
// This script creates a user for the inventory database

db = db.getSiblingDB('inventory_db');

// Create a user for the inventory database
db.createUser({
  user: 'inventory_user',
  pwd: 'inventory_password',
  roles: [
    {
      role: 'readWrite',
      db: 'inventory_db'
    }
  ]
});

// Create initial collections if needed
db.createCollection('users');
db.createCollection('products');
db.createCollection('sales');
db.createCollection('purchases');
db.createCollection('sellers');
db.createCollection('brands');
db.createCollection('categories');

print('Database initialization completed successfully!');
