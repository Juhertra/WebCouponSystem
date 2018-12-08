package jb9;

import java.sql.Date;
import java.sql.SQLException;
import java.util.Collection;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import coupon.sys.core.beans.Company;
import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.exceptions.DBDAOException;
import coupon.sys.core.exceptions.ConnectionPoolException;
import coupon.sys.core.exceptions.CouponDaoDbException;
import coupon.sys.core.exceptions.CouponSystemExceptions;
import coupon.sys.core.exceptions.CryptoHashException;
import coupon.sys.core.exceptions.FacadeException;
import coupon.sys.core.facade.AdminFacade;
import coupon.sys.core.facade.ClientType;
import coupon.sys.core.facade.CompanyFacade;
import coupon.sys.core.facade.CustomerFacade;
import coupon.sys.core.main.CouponSystem;

@SpringBootApplication
public class CouponSystemApplicationTest {

	public static void main(String[] args) throws CouponSystemExceptions, CryptoHashException, FacadeException, ConnectionPoolException, InterruptedException, DBDAOException, SQLException, CouponDaoDbException {
		SpringApplication.run(CouponSystemApplicationTest.class, args);

		/* ADMIN FACADE */

		AdminFacade adminF = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);

		/* ADIMIN FACADE - COMPANY METHODS */

		System.out.println("##### ADIMIN FACADE - COMPANY METHODS #####");

		/* CREATE COMPANY */

		System.out.println("Create Company Object");
		Company company = new Company();
		company.setName("Electric");
		company.setPassword("7777");
		company.setEmail("el@gmail.com");

		System.out.println("Create Company from Admin Facade");
		adminF.createCompany(company);

		/* UPDATE COMPANY */

		System.out.println("Change Company email and Password");
		company.setEmail("elf@walla.com");
		company.setPassword("8888");

		System.out.println("Update Company email and Password from Admin Facade");
		adminF.updateCompany(company);

		/* GET COMPANY BY ID */

		System.out.println("Get Company by ID: " + adminF.getCompanyByID(110));

		/* REMOVE COMPANY */
		/* The Company with the name "Electric" already exists in the DB */

		System.out.println("Create Company Object");
		Company exsistingCompanyForRemove = new Company();
		exsistingCompanyForRemove.setName("Electric");
		exsistingCompanyForRemove.setPassword("8888");
		exsistingCompanyForRemove.setEmail("elf@walla.com");
		exsistingCompanyForRemove.setId(adminF.getCompany("Electric").getId());
		System.out.println(exsistingCompanyForRemove);

		System.out.println("Remove existing Company using Admin Facade");
		adminF.removeCompany(exsistingCompanyForRemove);

		/* GET ALL COMPANIES */

		System.out.println("Get all companies");
		printItem(adminF.getAllCompanies());

		/* ADIMIN FACADE - CUSTOMER METHODS */

		System.out.println("##### ADIMIN FACADE - CUSTOMER METHODS #####");
		/* CREATE CUSTOMER */

		System.out.println("##### ADMIN CUSTOMER METHODS #####");
		Customer customer = new Customer();
		customer.setName("Joe Dar");
		customer.setPassword("666");

		System.out.println("Create Customer from Admin Facade");
		adminF.createCustomer(customer);

		/* UPDATE CUSTOMER */

		System.out.println("Change Customer password");
		customer.setPassword("999");
		System.out.println("Update Customer from Admin Facade");
		adminF.updateCustomer(customer);

		/* GET CUSTOMER */

		System.out.println("Get Customer: " + adminF.getCustomerByName("Joe Dar"));

		/* REMOVE CUSTOMER */
		/*
		 * The Customer with the name "Joe Dar" already exists in the DB
		 */

		System.out.println("Create Customer object to be remove");
		Customer exsistingCustomerForRemove = new Customer();
		exsistingCustomerForRemove.setName("Joe Dar");
		exsistingCustomerForRemove.setPassword("999");
		exsistingCustomerForRemove.setId(adminF.getCustomerByName("Joe Dar").getId());
		System.out.println(exsistingCustomerForRemove);

		System.out.println("Remove Customer using Admin Facade");
		adminF.removeCustomer(exsistingCustomerForRemove);

		/* GET ALL CUSTOMER */

		System.out.println("Get all Customers");
		printItem(adminF.getAllCustomers());

		/* COMPANY FACADE - COMPANY METHODS */

		System.out.println("##### COMPANY FACADE - COMPANY METHODS #####");

		CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Hush Puppies", "111",
				ClientType.COMPANY);
		
		Company fullCompany = companyFacade.getCompany("Hush Puppies");
		long loggedInCompanyID = fullCompany.getId();

		/* CREATE COUPON */

		System.out.println("Create Coupon Object");
		Coupon coupon = new Coupon();
		coupon.setTitle("Perks2");
		coupon.setStartDate(Date.valueOf("2018-07-07"));
		coupon.setEndDate(Date.valueOf("2019-07-07"));
		coupon.setAmount(500);
		coupon.setType(CouponType.SPORTS);
		coupon.setMessage("The best coupon");
		coupon.setPrice(299.0);
		coupon.setImage("sport star");

		System.out.println("Create Coupon from Company facade");
		companyFacade.createCoupon(coupon, loggedInCompanyID);

		/* UPDATE COUPON */

		System.out.println("Change Coupon date and price");
		coupon.setEndDate(Date.valueOf("2021-07-07"));
		coupon.setPrice(1000);
		coupon.setId(companyFacade.getCoupon(coupon.getId()).getId());

		System.out.println("Update Coupon from Company facade");
		companyFacade.updateCoupon(coupon);

		/* GET COUPON */

		System.out.println("Get Coupon: " + companyFacade.getCoupon(coupon.getId()));

		/* REMOVE COUPON */

		System.out.println("Remove Coupon using Company facade");
		companyFacade.removeCoupon(coupon);

		/* GET ALL COUPONS */

		System.out.println("Get all Coupons");
		printItem(companyFacade.getAllCoupons());

		/* GET COUPON BY TYPE */

		System.out.println("Get Coupons by type");
		printItem(companyFacade.getAllCouponsByType(CouponType.HEALTH));

		/* GET COUPON BY PRICE */

		System.out.println("Get Coupons by price");
		printItem(companyFacade.getAllCouponsByMaxPrice(150));

		/* GET COUPON BY DATE */

		System.out.println("Get Coupons by date");
		printItem(companyFacade.getAllCouponsByMaxDate("2021-07-07"));

		/* CUSTOMER FACADE - CUSTOMER METHODS */

		System.out.println("##### CUSTOMER FACADE - CUSTOMER METHODS #####");

		CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("John Day", "1111",
				ClientType.CUSTOMER);

		/* PURCHASE COUPON */

		System.out.println("Purchuse coupon");
		customerFacade.purchaseCoupon(companyFacade.getCoupon(17));

		/* GET ALL PURCHASED COUPONS */

		System.out.println("Get all purchusesd Coupons");
		printItem(customerFacade.getAllPurchasedCoupons());

		/* GET ALL PURCHASED COUPONS BY TYPE */

		System.out.println("Get all purchusesd Coupons by type");
		printItem(customerFacade.getAllPurchasedCouponsByType(CouponType.HEALTH));

		/* GET ALL PURCHASED COUPONS BY PRICE */

		System.out.println("Get all purchusesd Coupons by price");
		printItem(customerFacade.getAllPurchasedCouponsByPrice(150));

		System.out.println("##### SHUT DOWN #####");
		CouponSystem.getInstance().shutdown();
	}

	private static void printItem(Collection<?> list) {
		for (Object object : list) {
			System.out.println(object);
		}
	}

}
