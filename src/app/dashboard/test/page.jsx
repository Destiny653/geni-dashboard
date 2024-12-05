'use client';

import { useState } from 'react';
import sampleOrders from './data';
import styles from './order.module.css';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const ordersPerPage = 5;

  // Filter and Paginate Orders
  const filteredOrders =
    filter === 'all'
      ? sampleOrders
      : sampleOrders.filter((order) => order.status === filter);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const displayedOrders = filteredOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  const totalRevenue = sampleOrders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  return (
    <div className={styles.container}>
      <div className={styles.grid}>

        {/* Products Section */}
        <div className={styles.products}>
          <h1>Checked Out Items</h1>
          {displayedOrders.map((order) => (
            <div key={order._id} className={styles.orderCard}>
              <h3>Order ID: {order._id}</h3>
              <p><strong>Status:</strong> {order.status}</p>

              {/* Collapsible User Info */}
              <details className={styles.userDetails}>
                <summary>User Information</summary>
                <p><strong>Name:</strong> {order.user.name}</p>
                <p><strong>Email:</strong> {order.user.email}</p>
              </details>

              {order.products.map((item, index) => (
                <div key={index} className={styles.productCard}>
                  <img
                    src={item.productId.image}
                    alt={item.productId.name}
                    className={styles.productImage}
                  />
                  <div className={styles.productDetails}>
                    <h4>{item.productId.name}</h4>
                    <p><strong>Type:</strong> {item.productType}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>Price:</strong> ${item.productId.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Pagination Controls */}
          
          <div className={styles.pagination}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={styles.pageButton}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={styles.pageButton}
            >
              Next
            </button>
          </div>
        </div>
         {/* Sidebar with Filters */}
         <div className={styles.sidebar}>
          <h2>Order Summary</h2>
          <p><strong>Total Orders:</strong> {sampleOrders.length}</p>
          <p><strong>Total Revenue:</strong> ${totalRevenue.toFixed(2)}</p>
          <div className={styles.filterSection}>
            <label htmlFor="filter">Filter by Status:</label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={styles.filterDropdown}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>
          <button className={styles.exportButton}>Export Data</button>
        </div>
      </div>
    </div>
  );
}