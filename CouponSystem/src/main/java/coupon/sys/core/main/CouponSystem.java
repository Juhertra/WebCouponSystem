package coupon.sys.core.main;

import java.util.Timer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import coupon.sys.core.beans.Company;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.connectionPool.ConnectionPool;
import coupon.sys.core.dao.CompanyDao;
import coupon.sys.core.dao.CouponDao;
import coupon.sys.core.dao.CustomerDao;
import coupon.sys.core.dao.db.CompanyDaoDb;
import coupon.sys.core.dao.db.CouponDaoDb;
import coupon.sys.core.dao.db.CustomerDaoDb;
import coupon.sys.core.exceptions.ConnectionPoolException;
import coupon.sys.core.exceptions.CouponSystemExceptions;
import coupon.sys.core.exceptions.CryptoHashException;
import coupon.sys.core.facade.AdminFacade;
import coupon.sys.core.facade.ClientType;
import coupon.sys.core.facade.CompanyFacade;
import coupon.sys.core.facade.CouponClientFacade;
import coupon.sys.core.facade.CustomerFacade;
import coupon.sys.core.utils.DataBaseProperties;

/**
 * This is the singleton pattern coupon system of the project, that returns the
 * right facade object if the login attempt is successful. And by that the user
 * can check or make actions in the program. Also starts the Daily timer task
 * thread for deleting unnecessary coupons. And is able to shut down the system.
 * 
 * @author Julio Hernan Trajtemberg
 * @version 1.0 September 18, 2018.
 *
 */
public class CouponSystem {

	private static final Logger logger = LoggerFactory.getLogger(CouponSystem.class);

	/** The coupon system instance. */
	private static CouponSystem couponSystemInstance = new CouponSystem();

	/** The connection pool. */
	private ConnectionPool connectionPool;

	/** The company dao. */
	private CompanyDao companyDao = new CompanyDaoDb();

	/** The coupon dao. */
	private CouponDao couponDao = new CouponDaoDb();

	/** The customer dao. */
	private CustomerDao customerDao = new CustomerDaoDb();

	/**
	 * The timer. Scheduler for the daily cleaner thread task
	 */
	private Timer timer;

	/**
	 * Instantiates a new coupon system. Private c'tor 'hides' the public default
	 * one. CouponSystem is a singleton
	 */
	protected CouponSystem() {
		// get/create the connection pool
		try {
			connectionPool = ConnectionPool.getInstance();
		} catch (CouponSystemExceptions e) {
			logger.error("CouponSystem Error", e);
		}
		// start the daily cleaner thread
		logger.debug("Starting Timer");
		startTimer();
	}

	/**
	 * (singleton) - if no instance , create it only once.
	 * 
	 * @return couponSystemInstance
	 */
	public synchronized static CouponSystem getInstance() throws CouponSystemExceptions {
		if (couponSystemInstance == null) {
			// create a CouponSystem only once
			couponSystemInstance = new CouponSystem();
		}
		logger.debug("Coupon System instace returned");
		return couponSystemInstance;
	}

	/**
	 * Graceful shutdown.
	 *
	 * @throws ConnectionPoolException the connection pool exception
	 */
	public void shutdown() throws CouponSystemExceptions {
		try {
			connectionPool.closeAllConnections();
		} catch (ConnectionPoolException e) {
			logger.error("sql error returned from pool", new CouponSystemExceptions(e));
			throw new CouponSystemExceptions("sql error returned from pool", e);
		}
		System.exit(0);
	}

	/**
	 * Start timer. Will start cleaner thread ( at c'tor , or after user stopped it
	 * manually )
	 */
	public void startTimer() {
		// start daily thread to clean old coupons
		logger.info(
				"Thread scheduler started. interval = " + DataBaseProperties.getTheadIntervalMinutes() + " minutes.");
		timer = new Timer();
		// 60000 msec = 1 min
		// minutes of timer specified in DataBaseProperties file
		timer.scheduleAtFixedRate(new DailyCouponExpirationTask(couponDao), 30,
				(DataBaseProperties.getTheadIntervalMinutes() * 60000));
	}

	/**
	 * Stop timer. Stop the cleaner thread
	 */
	public void stopTimer() {
		logger.info("Thread stopped by user request.");
		timer.cancel();
	}

	/**
	 * Login. Global authentication method. depends on the ClientType
	 *
	 * @param name       the name
	 * @param password   the password
	 * @param clientType the client type
	 * @return the coupon client facade
	 * @throws CouponSystemExceptions the coupon system exceptions
	 */
	public CouponClientFacade login(String name, String password, ClientType clientType) throws CouponSystemExceptions {
		// login of Admin
		// DataBaseProperties admin = null;
		if (clientType == ClientType.ADMIN) {
			if (password.equals(DataBaseProperties.getPassword()) && name.equals(DataBaseProperties.getUser())) {
				// admin auth success, init AdminFacade and passing the DAO's
				AdminFacade adminFacade = new AdminFacade();
				return adminFacade;
			}
		}

		// login of Company
		if (clientType == ClientType.COMPANY)

		{
			// success auth will return the customer ID

			try {
				Long companyId;
				companyId = companyDao.login(name, password);
				if (companyId != null && companyId != 0) {
					// construct a customer with those params
					Company company = new Company();
					company.setId(companyId);
					company.setName(name);
					company.setPassword(password);
					// create a CustomerFacade, referring to this company
					CompanyFacade companyFacade = new CompanyFacade();
					return companyFacade;
				}
			} catch (CryptoHashException e) {
				logger.error("Wrong Password!", new CouponSystemExceptions(e));
				throw new CouponSystemExceptions("Wrong Password!", e);
			}
		}

		// login of Customer
		if (clientType == ClientType.CUSTOMER) {
			// success auth will return the customer ID
			try {

				Long customerId = customerDao.login(name, password);
				if (customerId != null && customerId != 0) {
					// construct a customer with those params
					Customer customer = new Customer();
					customer.setId(customerId);
					customer.setName(name);
					customer.setPassword(password);
					// create a CustomerFacade
					CustomerFacade customerFacade = new CustomerFacade();
					// customerFacade need to ref that specific customer ( 1 per client )
					customerFacade.setCustomer(customer);
					// and ref the DAOs ( customer + coupons )
					customerFacade.setCustomerDao(customerDao);
					customerFacade.setCouponDao(couponDao);
					return customerFacade;
				}
			} catch (CryptoHashException e) {
				logger.error("Wrong Password!", new CouponSystemExceptions(e));
				throw new CouponSystemExceptions("Wrong Password!", e);
			}
		}
		return null;
	}
}
