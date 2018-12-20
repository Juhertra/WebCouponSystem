package jb9.coupon.sys.core.controller;

import java.util.Collection;
//import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.slf4j.LoggerFactory;
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

@CrossOrigin(origins = "*")
@RestController
public class AdminController {

	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	private Company company;
	private Customer customer;

	private AdminFacade getFacade(HttpServletRequest request) {
		AdminFacade adminFacade = (AdminFacade) request.getSession().getAttribute("facade");
		return adminFacade;
	}

	/**
	 * Company Methods
	 * 
	 * @return
	 */

	@RequestMapping(value = "/Admin/createCompany", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCompany(@RequestBody Company company, HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		try {
			adminFacade.createCompany(company);
			return new ResponseEntity<>(company.getName(), HttpStatus.CREATED);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't create company: " + company.getName(), e);
			return new ResponseEntity<>(company.getName(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Admin/removeCompany/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> deleteCoupon(@PathVariable("id") int id, @RequestBody Company company,
			HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		try {
			adminFacade.removeCompany(company);
			return new ResponseEntity<>(company.getName(), HttpStatus.OK);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't delete company: " + company.getName(), e);
			return new ResponseEntity<>(company.getName(), HttpStatus.BAD_REQUEST);

		}
	}

	@RequestMapping(value = "/Admin/updateCompany/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updateCoupon(@PathVariable("id") int id, @RequestBody Company company,
			HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		try {
			adminFacade.updateCompany(company);
			return new ResponseEntity<>(company.getName(), HttpStatus.OK);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't update company: " + company.getName(), e);
			return new ResponseEntity<>(company.getName(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Admin/getCompanyByID/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Company getCompanyByID(@PathVariable("id") long id, HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		company = null;
		try {
			company = adminFacade.getCompanyByID(id);
		} catch (ConnectionPoolException e) {
			logger.error("Couldn't get connection", e);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get company by ID: " + company.getName(), e);
		}
		return company;
	}

	@RequestMapping(value = "/Admin/getCompanyByName/{companyName}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Company getCompanyByName(@PathVariable("companyName") String companyName, HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		company = null;
		try {
			company = adminFacade.getCompany(companyName);
		} catch (ConnectionPoolException e) {
			logger.error("Couldn't get connection", e);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get company by name: " + company.getId(), e);
		}
		return company;
	}

	@RequestMapping(value = "/Admin/getAllCompanies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Company> getAllCompanies(HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		Collection<Company> getAllCompanies = null;
		try {
			getAllCompanies = adminFacade.getAllCompanies();
		} catch (ConnectionPoolException e) {
			logger.error("Couldn't get connection", e);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all companies", e);
		}
		return getAllCompanies;
	}

	/**
	 * Customer Methods
	 */

	@RequestMapping(value = "/Admin/createCustomer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCustomer(@RequestBody Customer customer, HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		try {
			adminFacade.createCustomer(customer);
			return new ResponseEntity<>(customer.getName(), HttpStatus.CREATED);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't create customer: " + customer.getName());
			return new ResponseEntity<>(customer.getName(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Admin/removeCustomer/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> deleteCoupon(@PathVariable("id") int id, @RequestBody Customer customer,
			HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		try {
			adminFacade.removeCustomer(customer);
			return new ResponseEntity<>(customer.getName(), HttpStatus.OK);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't delete company: " + customer.getName());
			return new ResponseEntity<>(customer.getName(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Admin/updateCustomer/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updateCustomer(@PathVariable("id") int id, @RequestBody Customer customer,
			HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		try {
			adminFacade.updateCustomer(customer);
			return new ResponseEntity<>(customer.getName(), HttpStatus.OK);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't update company: " + customer.getName());
			return new ResponseEntity<>(customer.getName(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Admin/getCustomer/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Customer getCustomer(@PathVariable("id") long id, HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		customer = null;
		try {
			customer = adminFacade.getCustomer(id);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get company ID: " + customer.getName());
		}
		return customer;
	}

	@RequestMapping(value = "/Admin/getCustomerByName/{customerName}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Customer getCustomerByName(@PathVariable("customerName") String customerName, HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		customer = null;
		try {
			customer = adminFacade.getCustomerByName(customerName);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get company by name: " + customer.getId());
		}
		return customer;
	}

	@RequestMapping(value = "/Admin/getAllCustomers", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Customer> getAllCustomers(HttpServletRequest request) {
		AdminFacade adminFacade = getFacade(request);
		Collection<Customer> getAllCustomers = null;
		try {
			getAllCustomers = adminFacade.getAllCustomers();
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all companies");
		}
		return getAllCustomers;
	}
}
