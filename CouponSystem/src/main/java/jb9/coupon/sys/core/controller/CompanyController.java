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
import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.exceptions.CouponSystemExceptions;
import coupon.sys.core.facade.ClientType;
import coupon.sys.core.facade.CompanyFacade;
import coupon.sys.core.main.CouponSystem;

@CrossOrigin(origins = "*")
@RestController
public class CompanyController {

	Company company = null;
	CompanyFacade companyFacade = null;
	private Coupon coupon;
	long loggedInCompanyID = 0;

	private CompanyFacade getFacade() {

		try {
		companyFacade = (CompanyFacade) CouponSystem.getInstance().login(company.getName(), company.getPassword(), ClientType.COMPANY);
			//companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Hernan Company", "1234", ClientType.COMPANY);
//			company = companyFacade.getCompany(company.getName());
//			loggedInCompanyID = company.getId();
		} catch (CouponSystemExceptions e) {
			System.out.printf("Coupon System Exception", e);
		}

		System.out.println("Company: " + company.getName());
		return companyFacade;

	}

	@RequestMapping(value = "/Company/createCoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?>  createCoupon(@RequestBody Coupon coupon) {
		CompanyFacade companyFacade = getFacade();
		try {
			companyFacade.createCoupon(coupon, loggedInCompanyID);
			return new ResponseEntity<>(coupon.getTitle(), HttpStatus.OK);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't create coupon for company: " + company.getName());
			return new ResponseEntity<>(coupon.getTitle(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/Company/removeCoupon/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteCoupon(@PathVariable("id") int id, @RequestBody Coupon coupon) {
		CompanyFacade companyFacade = getFacade();
		try {
			companyFacade.removeCoupon(coupon);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't delete coupon for company: " + company.getName());
		}
	}

	@RequestMapping(value = "/Company/updateCoupon/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateCoupon(@PathVariable("id") int id, @RequestBody Coupon coupon) {
		CompanyFacade companyFacade = getFacade();
		try {
			companyFacade.updateCoupon(coupon);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't update coupon for company: " + company.getName());
		}
	}

	@RequestMapping(value = "/Company/getCoupon/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Coupon getCoupon(@PathVariable("id") long id) {
		CompanyFacade companyFacade = getFacade();
		//coupon = null;
		try {
			coupon = companyFacade.getCoupon(id);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get coupon, " + coupon.getTitle() + ", for company: " + company.getName());
		}
		return coupon;
	}

	@RequestMapping(value = "/Company/getAllCoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllCoupons() {
		CompanyFacade companyFacade = getFacade();
		Collection<Coupon> allCoupons = null;
		try {
			allCoupons = companyFacade.getAllCoupons();
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get all coupons for company: " + company.getName());
		}
		return allCoupons;
	}

	@RequestMapping(value = "/Company/getAllCouponsByType/{couponType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllCouponsbyType(@PathVariable("couponType") CouponType couponType) {
		CompanyFacade companyFacade = getFacade();
		Collection<Coupon> getAllCouponsByType = null;
		try {
			getAllCouponsByType = companyFacade.getAllCouponsByType(couponType);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get all coupons type: " + couponType + ", for company: " + company.getName());
		}
		return getAllCouponsByType;
	}

	@RequestMapping(value = "/Company/getAllCouponsByMaxDate/{date}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllCouponsByDate(@PathVariable("date") String date) {
		CompanyFacade companyFacade = getFacade();
		Collection<Coupon> getAllCouponsByDate = null;
		//String date = null;
		try {
			getAllCouponsByDate = companyFacade.getAllCouponsByMaxDate(date);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get all coupons by date: " + date + ", for company: " + company.getName());
		}
		return getAllCouponsByDate;
	}
	
	@RequestMapping(value = "/Company/getAllCouponsByMaxPrice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllCouponsByPrice(@PathVariable("price") double price) {
		CompanyFacade companyFacade = getFacade();
		Collection<Coupon> getAllCouponsByPrice = null;
	//	double price = 0;
		try {
			getAllCouponsByPrice = companyFacade.getAllCouponsByMaxPrice(price);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get all coupons by price: " + price + ", for company: " + company.getName());
		}
		return getAllCouponsByPrice;
	}
}
