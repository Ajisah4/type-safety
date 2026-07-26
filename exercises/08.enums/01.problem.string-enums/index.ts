// Order Management System
// Using string enums for status values

// Create enum OrderStatus
enum OrderStatus {
	Pending = 'pending',
	Processing = 'processing',
	Shipped = 'shipped',
	Delivered = 'delivered',
}

// Create order object
const order = {
	id: 'ORD-001',
	status: OrderStatus.Pending,
	customerName: 'Ajith Ramachandran',
}

// Create function to return status messages
function getStatusMessage(status: OrderStatus): string {
	switch (status) {
		case OrderStatus.Pending:
			return 'Your order is waiting to be processed.'
		case OrderStatus.Processing:
			return 'Your order is currently being prepared.'
		case OrderStatus.Shipped:
			return 'Your order has been shipped and is on the way.'
		case OrderStatus.Delivered:
			return 'Your order has been delivered successfully.'
		default:
			return 'Unknown order status.'
	}
}

console.log(order)
console.log(getStatusMessage(order.status))

// Export values for tests
export { OrderStatus, order, getStatusMessage }