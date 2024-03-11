# 1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

The relationship between the product and product_category tables in a relational database is typically a one-to-many relationship. This means that one category can have multiple products, but each product belongs to only one category.
and the realationship is mapped through  a foreign key in the Product table called `category_id`.

# 2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
The Table is using "Forein Key"  Constraint which ensures referential to correct category