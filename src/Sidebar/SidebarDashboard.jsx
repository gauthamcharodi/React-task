import React from 'react';
import './Dashboard.css';
import image from '../assests/download (1).png'

const items = [
  { id: image, channel: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue:"0.00", status: 'Pending', actions: 'Actions' },
  { id: image, channel: '#TKN20203753', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue:"0.00", status: 'Pending', actions: 'Actions' },
  { id: image, channel: '#TKN20203752', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue:"0.00", status: 'Pending', actions: 'Actions' },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Order No</th>
            <th>Order Date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
             <td><img src={item.id} alt=""  height={40} width={40}/></td>
              <td id="channel">{item.channel}</td>
              <td>{item.orderDate}</td>
              <td>{item.city}</td>
              <td>{item.customerName}</td>
              <td>{item.orderValue}</td>
              <td>{item.status}</td>
              <td>{item.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;