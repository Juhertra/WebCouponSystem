package coupon.sys.core.dao.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.connectionPool.ConnectionPool;
import coupon.sys.core.dao.CustomerDao;
import coupon.sys.core.exceptions.ConnectionPoolException;
import coupon.sys.core.exceptions.CouponSystemExceptions;
import coupon.sys.core.exceptions.CryptoHashException;
import coupon.sys.core.exceptions.DBDAOException;
import coupon.sys.core.utils.CryptoHashAlgorithms;

/**
 * This class is a part of the DAO layer. The class which communicates between
 * the customer's object related methods and the data base through sql queries.
 * 
 * @author Julio Hernan Trajtemberg
 * @version 1.0 September 18, 2018.
 *
 */
public class CustomerDaoDb implements CustomerDao {

	/** The logger. */
	private static final Logger logger = LoggerFactory.getLogger(CustomerDaoDb.class);
	/** The connection pool. */
	private ConnectionPool connectionPool;
	/** The logged in customer ID. */
	protected static long loggedInCustomerID = 0;

	/**
	 * Constructs the class that communicates with the db and initializes the pool
	 * variable with the Connection pool's instance.
	 */
	public CustomerDaoDb() {
		try {
			this.connectionPool = ConnectionPool.getInstance();
		} catch (ConnectionPoolException e) {
			logger.error("Failed to get connection pool", e);
		} catch (CouponSystemExceptions e) {
			logger.error("Coupon System failure", e);
		}
	}

	/**
	 * Create Customer, the method checks if the company already exists if it
	 * doesn't it crates it and if does throws exception.
	 *
	 * @param customer the customer
	 * @throws CouponSystemExceptions
	 */
	@Override
	public void createCustomer(Customer customer) throws CouponSystemExceptions {
		Connection connection = connectionPool.getConnection();
		try {
			String verifyCustomerQuery = "SELECT * FROM Customer";
			PreparedStatement verifyCustomerPstmt = connection.prepareStatement(verifyCustomerQuery);
			ResultSet resultSet = verifyCustomerPstmt.executeQuery();
			String customerName;
			Boolean custamerNameExists = false;

			while (resultSet.next()) {
				customerName = resultSet.getString("NAME");
				if (customerName.equals(customer.getName())) {
					custamerNameExists = true;
					logger.warn("Customer Already Exists");
					break;
				}
			}

			// Write customer to Customer table
			if (custamerNameExists == false) {
				logger.info("Writing to DB - Creating Customer");
				String query = "INSERT INTO Customer (NAME, PASSWORD) VALUES (?, ?)";
				PreparedStatement pstmt = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
				pstmt.setString(1, customer.getName());
				pstmt.setString(2, customer.getPassword());
				pstmt.executeUpdate();
				pstmt.close();
			}
		} catch (SQLException e) {
			logger.error("Customer already exists.", new DBDAOException(e));
			throw new DBDAOException("Customer already exists.", e);
		} finally {
			connectionPool.returnConnection(connection);
			logger.debug("Connection returned");
		}
	}

	/**
	 * This method removes the customer's record from the data base, using the
	 * received customer parameter and removes the customer from joined table.
	 *
	 * @param customer the customer
	 * @throws CouponSystemExceptions
	 */
	@Override
	public void removeCustomer(Customer customer) throws CouponSystemExceptions {

		Connection connection = connectionPool.getConnection();
		try {
			logger.info("Writing to DB - Removing Customer");
			String query = "DELETE FROM Customer WHERE ID=?";
			PreparedStatement pstmt = connection.prepareStatement(query);

			// deleting from 2 tables (2 sql queries)
			pstmt.setLong(1, customer.getId());
			pstmt.executeUpdate();
			pstmt.close();

			String query2 = "DELETE FROM Customer_Coupon WHERE CUSTOMER_ID=?";
			PreparedStatement pstmt2 = connection.prepareStatement(query2);
			pstmt2.setLong(1, customer.getId());
			pstmt2.executeUpdate();
			pstmt2.close();
			logger.info("Customer removed successfully.");
		} catch (SQLException e) {
			logger.error("Failed to remove the requested customer", new DBDAOException(e));
			throw new DBDAOException("Failed to remove the requested customer", e);
		} finally {
			connectionPool.returnConnection(connection);
			logger.debug("Connection returned");
		}

	}

	/**
	 * This method updates some columns in the customer's record in the data base,
	 * using the received customer parameter.
	 *
	 * @param customer the customer
	 * @throws CouponSystemExceptions
	 */
	@Override
	public void updateCustomer(Customer customer) throws CouponSystemExceptions {

		Connection connection = connectionPool.getConnection();
		try {
			logger.info("Writing to DB - Updating Customer");
			String query = "UPDATE Customer SET NAME=?, PASSWORD=? WHERE ID=?";
			PreparedStatement pstmt = connection.prepareStatement(query);
			pstmt.setString(1, customer.getName());
			pstmt.setString(2, customer.getPassword());
			pstmt.setLong(3, customer.getId());
			pstmt.executeUpdate();
			logger.info("Customer updated successfully.");
			pstmt.close();
		} catch (SQLException e) {
			logger.error("Failed to update the requested customer", new DBDAOException(e));
			throw new DBDAOException("Failed to update the requested customer", e);
		} finally {
			connectionPool.returnConnection(connection);
			logger.debug("Connection returned");
		}

	}

	/**
	 * This method receives the customer's record from the data base, using the
	 * received customer's id parameter.
	 *
	 * @param id the id
	 * @return the customer
	 * @throws CouponSystemExceptions
	 */
	@Override
	public Customer getCustomer(long id) throws CouponSystemExceptions {
		Customer customer = new Customer();
		Connection connection = connectionPool.getConnection();
		try {
			logger.info("Writing to DB - Selecting Customer");
			String query = "SELECT * FROM Customer WHERE ID=?";
			PreparedStatement pstmt = connection.prepareStatement(query);
			pstmt.setLong(1, id);
			ResultSet resultSet = pstmt.executeQuery();

			// if line return : its a customer record from DB.
			while (resultSet.next()) {
				customer.setId(resultSet.getLong("ID"));
				customer.setName(resultSet.getString("NAME"));
				customer.setPassword(resultSet.getString("PASSWORD"));
			}
			pstmt.close();
		} catch (SQLException e) {
			logger.error("Failed to get the requested customer", new DBDAOException(e));
			throw new DBDAOException("Failed to get the requested customer", e);
		} catch (CryptoHashException e) {
			logger.error("Password not in database", new DBDAOException(e));
			throw new DBDAOException("Password not in database", e);
		} finally {
			connectionPool.returnConnection(connection);
			logger.debug("Connection returned");
		}

		return customer;
	}

	/**
	 * This method receives all the customer's records of all the customers from the
	 * data base.
	 *
	 * @return the all customers
	 * @throws CouponSystemExceptions
	 */
	@Override
	public Collection<Customer> getAllCustomers() throws CouponSystemExceptions {
		List<Customer> allCustomers = new ArrayList<Customer>();
		Connection connection = connectionPool.getConnection();
		try {
			logger.info("Writing to DB - Getting all Customers");
			String query = "SELECT * FROM Customer";
			PreparedStatement pstmt = connection.prepareStatement(query);
			ResultSet resultSet = pstmt.executeQuery();
			Customer customer = null;
			while (resultSet.next()) {
				customer = new Customer();
				customer.setId(resultSet.getLong("ID"));
				customer.setName(resultSet.getString("NAME"));
				customer.setPassword(resultSet.getString("PASSWORD"));
				allCustomers.add(customer);
			}
			logger.info("All customers presented successfully");
			pstmt.close();
		} catch (SQLException e) {
			logger.error("Failed to get all customers", new DBDAOException(e));
			throw new DBDAOException("Failed to get all customers", e);
		} catch (CryptoHashException e) {
			logger.error("Password not in database", new DBDAOException(e));
			throw new DBDAOException("Password not in database", e);
		} finally {
			connectionPool.returnConnection(connection);
			logger.debug("Connection returned");
		}
		return allCustomers;
	}

	/**
	 * This method receives all the logged customer's coupons from the records of
	 * the data base.
	 *
	 * @param customer the customer
	 * @return the coupons
	 * @throws CouponSystemExceptions
	 */
	@Override
	public Collection<Coupon> getCoupons(Customer customer) throws CouponSystemExceptions {
		List<Coupon> getCoupons = new ArrayList<Coupon>();
		Connection connection = connectionPool.getConnection();

		try {
			String query = "SELECT * FROM COUPON WHERE ID IN "
					+ "(SELECT CUSTOMER_COUPON.COUPON_ID FROM CUSTOMER_COUPON WHERE CUSTOMER_COUPON.CUSTOMER_ID=?)";
			PreparedStatement pstmt = connection.prepareStatement(query);
			pstmt.setLong(1, customer.getId());
			ResultSet resultSet = pstmt.executeQuery();
			Coupon coupon = null;
			while (resultSet.next()) {
				coupon = new Coupon();
				coupon.setId(resultSet.getLong("ID"));
				coupon.setTitle(resultSet.getString("TITLE"));
				coupon.setStartDate(resultSet.getDate("START_DATE"));
				coupon.setStartDate(resultSet.getDate("END_DATE"));
				coupon.setAmount(resultSet.getInt("AMOUNT"));
				coupon.setType(CouponType.valueOf(resultSet.getString("TYPE")));
				coupon.setMessage(resultSet.getString("MESSAGE"));
				coupon.setPrice(resultSet.getDouble("PRICE"));
				coupon.setImage(resultSet.getString("IMAGE"));

				// add to list
				getCoupons.add(coupon);
			}
			pstmt.close();
		} catch (SQLException e) {
			logger.error("Failed to get the requested coupon", new DBDAOException(e));
			throw new DBDAOException("Failed to get the requested coupon", e);
		} finally {
			connectionPool.returnConnection(connection);
			logger.debug("Connection returned");
		}
		return getCoupons;
	}

	/**
	 * A method for login into the system through passing user name and password.
	 * 
	 * The password is validated by converting the users input into system hash
	 * encryptions used and matching the hash with the one already written on the DB
	 *
	 * @param name     the name
	 * @param password the password
	 * @return customerId - Returns connection to pool CustomerId - Returns Customer
	 *         ID
	 * @throws CouponSystemExceptions
	 */
	@Override
	public Long login(String name, String password) throws CouponSystemExceptions {

		// Get connection from ConenctionPool
		Connection connection = connectionPool.getConnection();
		Long loggedInCustomerID = null;
		try {
			CryptoHashAlgorithms CHA = new CryptoHashAlgorithms();
			password = CHA.hashPassword(password.getBytes(), "SHA-256");
			String query = "SELECT ID FROM Customer WHERE NAME=? AND PASSWORD=?";
			PreparedStatement pstmt = connection.prepareStatement(query);
			pstmt.setString(1, name);
			pstmt.setString(2, password);
			ResultSet resultSet = pstmt.executeQuery();
			while (resultSet.next()) {

				loggedInCustomerID = resultSet.getLong(1);
//				loggedInCustomerID = customerId;
				// if authorization is successful, the ID is returned
			}
			pstmt.close();
		} catch (SQLException e) {
			logger.error("Failed to login", new DBDAOException(e));
			throw new DBDAOException("Failed to login", e);
		} catch (CryptoHashException e) {
			logger.error("Wrong password", new DBDAOException(e));
			throw new DBDAOException("Wrong password!");
		} finally {
			connectionPool.returnConnection(connection);
			logger.debug("Connection returned");
		}
		return loggedInCustomerID;
	}

	/**
	 * Get customer from Customer table by ID.
	 *
	 * @param customerName the customer name
	 * @return connection - Connection returns to pool customer.getId() - Returns
	 *         the customer ID of the company name requested
	 * @throws CouponSystemExceptions
	 */
	@Override
	public long getCustomerId(String customerName) throws CouponSystemExceptions {

		// construct a Customer to return data
		Customer customer = new Customer();
		Connection connection = connectionPool.getConnection();
		try {
			String query = "SELECT ID FROM Customer WHERE NAME=?";
			PreparedStatement pstmt = connection.prepareStatement(query);
			pstmt.setString(1, customerName);
			ResultSet resultSet = pstmt.executeQuery();

			// if a line returns : its a customer record from DB.
			while (resultSet.next()) {
				customer.setId(resultSet.getLong("ID"));
			}
			pstmt.close();
		} catch (SQLException e) {
			logger.error("Failed to get customer ID for"  + customer.getName(), new DBDAOException(e));
			throw new DBDAOException("Failed to get customer ID for " + customer.getName(), e);
		} finally {
			connectionPool.returnConnection(connection);
			logger.debug("Connection returned");
		}
		return customer.getId();
	}

	/**
	 * This method adds a coupon to a customer. Customer ID and Coupon ID are added
	 * to customer_coupon join table
	 *
	 * @param coupon   the coupon
	 * @param customer the customer
	 * @throws CouponSystemExceptions
	 */
	@Override
	public void addCouponToCustomer(Coupon coupon, Customer customer) throws CouponSystemExceptions {
		Connection connection = connectionPool.getConnection();
		try {
			String query = "INSERT INTO Customer_Coupon (CUSTOMER_ID, COUPON_ID) VALUES (?, ?)";
			PreparedStatement pstmt = connection.prepareStatement(query);
			pstmt.setLong(1, customer.getId());
			pstmt.setLong(2, coupon.getId());
			pstmt.executeUpdate();
			pstmt.close();

			String query2 = "UPDATE COUPON SET AMOUNT = AMOUNT - 1 WHERE ID=?";
			PreparedStatement pstmt2 = connection.prepareStatement(query2);
			pstmt2.setLong(1, coupon.getId());
			pstmt2.executeUpdate();
			pstmt2.close();
			logger.info("coupon purchased by " + customer.getName() + ".");
		} catch (SQLException e) {
			logger.error("Duplicated ID, cannot add customer: " + customer.getName(), new DBDAOException(e));
			throw new DBDAOException("Duplicated ID, cannot add customer: " + customer.getName(), e);
		} finally {
			connectionPool.returnConnection(connection);
			logger.debug("Connection returned");
		}
	}
}
