package jb9.coupon.sys.core.controller;

import java.util.Collection;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import coupon.sys.core.beans.Company;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.exceptions.ConnectionPoolException;
import coupon.sys.core.exceptions.CouponSystemExceptions;
import coupon.sys.core.facade.AdminFacade;
import coupon.sys.core.facade.ClientType;
import coupon.sys.core.main.CouponSystem;
import coupon.sys.core.utils.DataBaseProperties;

@CrossOrigin(origins = "*")
@RestController
public class AdminController {

	DataBaseProperties admin = null;
	AdminFacade adminFacade = null;
	private Company company;
	private Customer customer;

	private AdminFacade getFacade() {

		try {
		adminFacade = (AdminFacade) CouponSystem.getInstance().login(DataBaseProperties.getUser(), DataBaseProperties.getPassword(), ClientType.ADMIN);
			//adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
		} catch (CouponSystemExceptions e) {
			System.out.printf("Coupon System Exception", e);
		}
		return adminFacade;

	}

	/**
	 * Company Methods
	 * 
	 * @return
	 */

	@RequestMapping(value = "/Admin/createCompany", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCompany(@RequestBody Company company) {
		AdminFacade adminFacade = getFacade();
		try {
			adminFacade.createCompany(company);
			return new ResponseEntity<>(company.getName(), HttpStatus.CREATED);
		} catch (CouponSystemExceptions e) {
			System.out.printf("Couldn't create company: " + company.getName(), e);
			return new ResponseEntity<>(company.getName(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Admin/removeCompany/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> deleteCoupon(@PathVariable("id") int id, @RequestBody Company company) {
		AdminFacade adminFacade = getFacade();
		try {
			adminFacade.removeCompany(company);
			return new ResponseEntity<>(company.getName(), HttpStatus.OK);
		} catch (CouponSystemExceptions e) {
			System.out.printf("Couldn't delete company: " + company.getName(), e);
			return new ResponseEntity<>(company.getName(), HttpStatus.BAD_REQUEST);

		}
	}

	@RequestMapping(value = "/Admin/updateCompany/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updateCoupon(@PathVariable("id") int id, @RequestBody Company company) {
		AdminFacade adminFacade = getFacade();
		try {
			adminFacade.updateCompany(company);
			return new ResponseEntity<>(company.getName(), HttpStatus.OK);
		} catch (CouponSystemExceptions e) {
			System.out.printf("Couldn't update company: " + company.getName(), e);
			return new ResponseEntity<>(company.getName(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Admin/getCompanyByID/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Company getCompanyByID(@PathVariable("id") long id) {
		AdminFacade adminFacade = getFacade();
		company = null;
		try {
			company = adminFacade.getCompanyByID(id);
		} catch (ConnectionPoolException e) {
			System.out.printf("Couldn't get connection", e);
		} catch (CouponSystemExceptions e) {
			System.out.printf("Couldn't get company by ID: " + company.getName(), e);
		}
		return company;
	}

	@RequestMapping(value = "/Admin/getCompanyByName/{companyName}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Company getCompanyByName(@PathVariable("companyName") String companyName) {
		AdminFacade adminFacade = getFacade();
		company = null;
		try {
			company = adminFacade.getCompany(companyName);
		} catch (ConnectionPoolException e) {
			System.out.printf("Couldn't get connection", e);
		} catch (CouponSystemExceptions e) {
			System.out.printf("Couldn't get company by name: " + company.getId(), e);
		}
		return company;
	}

	@RequestMapping(value = "/Admin/getAllCompanies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Company> getAllCompanies() {
		AdminFacade adminFacade = getFacade();
		Collection<Company> getAllCompanies = null;
		try {
			getAllCompanies = adminFacade.getAllCompanies();
		} catch (ConnectionPoolException e) {
			System.out.printf("Couldn't get connection", e);
		} catch (CouponSystemExceptions e) {
			System.out.printf("Couldn't get all companies", e);
		}
		return getAllCompanies;
	}

	/**
	 * Customer Methods
	 */

	@RequestMapping(value = "/Admin/createCustomer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
		AdminFacade adminFacade = getFacade();
		try {
			adminFacade.createCustomer(customer);
			return new ResponseEntity<>(customer.getName(), HttpStatus.CREATED);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't create customer: " + customer.getName());
			return new ResponseEntity<>(customer.getName(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Admin/removeCustomer/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> deleteCoupon(@PathVariable("id") int id, @RequestBody Customer customer) {
		AdminFacade adminFacade = getFacade();
		try {
			adminFacade.removeCustomer(customer);
			return new ResponseEntity<>(customer.getName(), HttpStatus.OK);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't delete company: " + customer.getName());
			return new ResponseEntity<>(customer.getName(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Admin/updateCustomer/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updateCustomer(@PathVariable("id") int id, @RequestBody Customer customer) {
		AdminFacade adminFacade = getFacade();
		try {
			adminFacade.updateCustomer(customer);
			return new ResponseEntity<>(customer.getName(), HttpStatus.OK);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't update company: " + customer.getName());
			return new ResponseEntity<>(customer.getName(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Admin/getCustomer/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Customer getCustomer(@PathVariable("id") long id) {
		AdminFacade adminFacade = getFacade();
		customer = null;
		try {
			customer = adminFacade.getCustomer(id);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get company ID: " + customer.getName());
		}
		return customer;
	}

	@RequestMapping(value = "/Admin/getCustomerByName/{customerName}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Customer getCustomerByName(@PathVariable("customerName") String customerName) {
		AdminFacade adminFacade = getFacade();
		customer = null;
		try {
			customer = adminFacade.getCustomerByName(customerName);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get company by name: " + customer.getId());
		}
		return customer;
	}

	@RequestMapping(value = "/Admin/getAllCustomers", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Customer> getAllCustomers() {
		AdminFacade adminFacade = getFacade();
		Collection<Customer> getAllCustomers = null;
		try {
			getAllCustomers = adminFacade.getAllCustomers();
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get all companies");
		}
		return getAllCustomers;
	}
}
