## Question 1: Normalization
Consider the following unnormalized table for a bookstore database:


| Book ID | Title                 | Author          | Genre       | Publisher         | ISBN           | Price  |
|---------|-----------------------|-----------------|-------------|-------------------|---------------|--------|
| 101     | To Kill a Mockingbird | Harper Lee      | Fiction     | HarperCollins     | 978-0061120084 | 10.99  |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction   | Scribner          | 978-0743273565 | 12.50  |
| 103     | Principles of Physics | Jearl Walker   | Science     | Wiley             | 978-0321976444 | 50.00  |
 
Normalize the table to 1NF, 2NF, and 3NF, explaining the steps you took at each normalization level.

## Solution 1: Normalization
1NF -> The table does not contain any repeating groups therefore it is already in 1NF.

2NF ->
| Book ID | Title                 | Author          | Genre       |
|---------|-----------------------|-----------------|-------------|
| 101     | To Kill a Mockingbird | Harper Lee      | Fiction     | 
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction   | 
| 103     | Principles of Physics | Jearl Walker   | Science     | 

In the above table Book Id can be the primary key

| Publisher         | ISBN           | Price  |
|-------------------|---------------|--------|
|HarperCollins     | 978-0061120084 | 10.99  |
|Scribner          | 978-0743273565 | 12.50  |
|Wiley             | 978-0321976444 | 50.00  |
In the above table ISBN can be the primary key

3NF ->
| Book ID | Title                 | Author          | Genre Id       |
|---------|-----------------------|-----------------|-------------|
| 101     | To Kill a Mockingbird | Harper Lee      |  1
| 102     | The Great Gatsby      | F. Scott Fitzgerald | 2   | 
| 103     | Principles of Physics | Jearl Walker   |  1    | 

In the above table Book Id can be the primary key, and Genre Id will be the Foreign Key

| Publisher         | ISBN           | Price  |
|-------------------|---------------|--------|
|HarperCollins     | 978-0061120084 | 10.99  |
|Scribner          | 978-0743273565 | 12.50  |
|Wiley             | 978-0321976444 | 50.00  |
In the above table ISBN can be the primary key

|Genre Id| Genre       |
|--------|-------------|
|1       |Fiction      |
|2       |Science      |
In the above table Genre ID can be the primary key

## [Bonus]Question 2: Database Normalization Practice

Apply Normalization on the below table and return the list of tables after 1NF, 2NF, 3NF, 4NF, 5NF( if applicable)

### Table: Employee Information

| Employee ID | Employee Name | Department   | Project ID | Project Name | Start Date | End Date   | Salary  |
|-------------|---------------|--------------|------------|--------------|------------|------------|---------|
| 101         | John Doe      | HR           | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000    |
| 101         | John Doe      | HR           | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200    |
| 102         | Jane Smith    | Marketing    | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500    |
| 103         | Mike Johnson  | IT           | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000    |
| 103         | Mike Johnson  | IT           | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200    |
| 104         | Sarah Brown   | HR           | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800    |
| 105         | Robert Lee    | Finance      | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200    |
| 106         | Lisa Wang     | IT           | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800    |

## Solution 2: Normalization

1NF -> The table does not contain any repeating groups therefore it is already in 1NF.

2NF ->
| Employee ID | Employee Name | Department   | 
|-------------|---------------|--------------|
| 101         | John Doe      | HR           | 
| 101         | John Doe      | HR           |
| 102         | Jane Smith    | Marketing    | 
| 103         | Mike Johnson  | IT           |
| 103         | Mike Johnson  | IT           | 
| 104         | Sarah Brown   | HR           | 
| 105         | Robert Lee    | Finance      | 
| 106         | Lisa Wang     | IT           | 
In the above table Employee ID can be the primary key

|Project ID | Project Name | Start Date | End Date   | Salary  |
|------------|--------------|------------|------------|---------|
|001        | Project A    | 2023-01-15 | 2023-06-30 | 5000    |
|002        | Project B    | 2023-04-01 | 2023-08-31 | 5200    |
|001        | Project A    | 2023-02-01 | 2023-05-31 | 5500    |
|002        | Project B    | 2023-03-10 | 2023-08-15 | 6000    |
|003        | Project C    | 2023-06-15 | 2023-11-30 | 6200    |
|002        | Project B    | 2023-04-20 | 2023-07-31 | 4800    |
|001        | Project A    | 2023-05-05 | 2023-09-30 | 5200    |
|001        | Project A    | 2023-06-01 | 2023-12-31 | 5800    |
In the above table Project ID can be the primary key

3NF ->
| Employee ID | Employee Name | Department ID| Salary  | Start Date | End Date   | Project Id |
|-------------|---------------|--------------|---------|------------|------------|------------|
| 101         | John Doe      | 1            | 5000    | 2023-01-15 | 2023-06-30 | 001        |
| 101         | John Doe      | 1            | 5200    | 2023-04-01 | 2023-08-31 | 002        |
| 102         | Jane Smith    | 2            | 5500    | 2023-02-01 | 2023-05-31 | 001        |
| 103         | Mike Johnson  | 3            | 6000    | 2023-03-10 | 2023-08-15 | 002        |
| 103         | Mike Johnson  | 3            | 6200    | 2023-06-15 | 2023-11-30 | 003        |
| 104         | Sarah Brown   | 1            | 4800    | 2023-04-20 | 2023-07-31 | 002        |
| 105         | Robert Lee    | 4            | 5200    | 2023-05-05 | 2023-09-30 | 001        |
| 106         | Lisa Wang     | 3            | 5800    | 2023-06-01 | 2023-12-31 | 001        |
In the above table Employee ID can be the primary key

|Project ID | Project Name | 
|------------|-------------|
|001        | Project A    | 
|002        | Project B    | 
|003        | Project C    |
In the above table Project ID can be the primary key

|Department ID | Department   |
|--------------|--------------|
|1             |HR            |
|2             |Marketing     |
|3             |IT            |
|4             |Finance       |
In the above table Department ID can be the primary key

## Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

## Solution 3:
In a relational database, primary keys and foreign keys are used to establish relationships between tables. 
Primary key
A unique identifier for each record in a table. It ensures that no two rows have the same set of values. For example, a driver's license number, telephone number with area code, or vehicle identification number (VIN). A relational database must have only one primary key.
Foreign key
A column or group of columns in a relational database table that provides a link between data in two tables. It uniquely identifies a record in the relational database table. It refers to the field in a table which is the primary key of another table.

## Question 4: Explain the ACID properties in the context of database transactions.

## Solution 4:
ACID is an acronym that refers to the set of 4 key properties that define a transaction: Atomicity, Consistency, Isolation, and Durability. If a database operation has these ACID properties, it can be called an ACID transaction, and data storage systems that apply these operations are called transactional systems.

-> Atomicity: Atomicity ensures that a transaction is treated as a single, indivisible unit of work. Either all the operations within the transaction are completed successfully, or none of them are. If any part of the transaction fails, the entire transaction is rolled back to its original state, ensuring data consistency and integrity.

-> Consistency: Consistency ensures that a transaction takes the database from one consistent state to another consistent state. The database is in a consistent state both before and after the transaction is executed. Constraints, such as unique keys and foreign keys, must be maintained to ensure data consistency.

-> Isolation: Isolation ensures that multiple transactions can execute concurrently without interfering with each other. Each transaction must be isolated from other transactions until it is completed. This isolation prevents dirty reads, non-repeatable reads, and phantom reads.

-> Durability: Durability ensures that once a transaction is committed, its changes are permanent and will survive any subsequent system failures. The transaction’s changes are saved to the database permanently, and even if the system crashes, the changes remain intact and can be recovered.

## Question 5: Describe the concept of indexing in a database. How does indexing improve query performance?

## Solution 5:
Indexing is a data structure that maps search keys to their corresponding data in memory. It's the most effective way to improve database application performance. 

->> Indexing improves query performance by: </br>
    - Maximizing query efficiency </br>
    - Reducing the amount of records to be found </br>
    - Creating pointers to where data is stored </br>
    - Keeping the data and searching index in sync </br></br>
->> Indexing works by: </br>
    - Creating pointers to where data is stored </br>
    - Keeping the values in sorted order </br>
    - Writing a corresponding row to the index when data is inserted </br>
    - Taking out the index row when a row is deleted </br>
The most common type of index structure in relational databases is the B-tree.  </br>

## Question 6: Explain the concept of concurrency control, deadlocks in a multi-user database environment.

## Solution 6:
Concurrency control is a procedure that manages simultaneous operations in a database management system (DBMS). It ensures that database transactions are performed concurrently and accurately without violating data integrity.

->> The primary goal of concurrency control is to: </br>
    - Allow transactions to run concurrently </br>
    - Maintain the database's ACID (Atomicity, Consistency, Isolation, and Durability) properties </br>
    - Prevent conflicts </br>
    - Ensure the isolation and correctness of concurrent activities </br>

Deadlock is a critical challenge in database management systems (DBMS) that can cause system failure and impact overall performance. The potential for deadlocks increases in a multi-user environment, where multiple transactions compete for shared resources.

 - Resource Greed: Transactions greedily hold multiple resources without releasing them at proper times, causing deadlock. This cause is also called as Hold and Wait.
 - Circular Dependency: Transactions are stuck in a loop of dependencies, unable to break free.
 - Poor Scheduling: Improper scheduling of transactions leads to conflicts and deadlock
 - Locking Mismanagement: Improper or inefficient use of resources by transactions leads to deadlock.
 - Communication Breakdown: Lack of proper communication and understanding among transactions results in a deadlock.
 - Lack of Deadlock Detection and Handling Mechanism: It means the system does not have built-in mechanism to identify and resolve deadlocks automatically.

## Question 7: Read about Database sharding and explain couple of real time examples where, why, how it this concept is used.

## Solution 7:
Database sharding is a method for distributing a single dataset across multiple databases. This allows for larger datasets to be split into smaller chunks and stored in multiple data nodes, increasing the total storage capacity of the system.

Here are some examples of database sharding: 
 - College students records: 
If you need to find a student from the database, each time around 100,000 transactions have to be done. You can divide the records into smaller data shards based on years.
 - Employees in giant company records : 
If you need to find a employee from the database, each time thousands of transactions have to be done. You can divide the records into smaller data shards based on project, department, experience, expertise, job level, location.