package jb9.coupon.sys.core.controller;

import java.util.Collection;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import coupon.sys.core.facade.CompanyFacade;

@CrossOrigin(origins = "*")
@RestController
public class CompanyController {

	private static final Logger logger = LoggerFactory.getLogger(CompanyController.class);
	Company company = null;
	CompanyFacade companyFacade = null;
	private Coupon coupon;
	long loggedInCompanyID = 0;

	/**
	 * @param request
	 * @return
	 */
	private CompanyFacade getFacade(HttpServletRequest request) {

		CompanyFacade companyFacade = (CompanyFacade) request.getSession().getAttribute("facade");
		return companyFacade;

	}

	/**
	 * @param coupon
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Company/createCoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCoupon(@RequestBody Coupon coupon, HttpServletRequest request) {
		CompanyFacade companyFacade = getFacade(request);
		try {
			companyFacade.createCoupon(coupon, loggedInCompanyID);
			return new ResponseEntity<>(coupon.getTitle(), HttpStatus.OK);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't create coupon for company: " + company.getName());
			return new ResponseEntity<>(coupon.getTitle(), HttpStatus.BAD_REQUEST);
		}
	}

	/**
	 * @param id
	 * @param coupon
	 * @param request
	 */
	@RequestMapping(value = "/Company/removeCoupon/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void deleteCoupon(@PathVariable("id") int id, @RequestBody Coupon coupon, HttpServletRequest request) {
		CompanyFacade companyFacade = getFacade(request);
		try {
			companyFacade.removeCoupon(coupon);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't delete coupon for company: " + company.getName());
		}
	}

	/**
	 * @param id
	 * @param coupon
	 * @param request
	 */
	@RequestMapping(value = "/Company/updateCoupon/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateCoupon(@PathVariable("id") int id, @RequestBody Coupon coupon, HttpServletRequest request) {
		CompanyFacade companyFacade = getFacade(request);
		try {
			companyFacade.updateCoupon(coupon);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't update coupon for company: " + company.getName());
		}
	}

	/**
	 * @param id
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Company/getCoupon/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Coupon getCoupon(@PathVariable("id") long id, HttpServletRequest request) {
		CompanyFacade companyFacade = getFacade(request);
		// coupon = null;
		try {
			coupon = companyFacade.getCoupon(id);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get coupon, " + coupon.getTitle() + ", for company: " + company.getName());
		}
		return coupon;
	}

	/**
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Company/getAllCoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllCoupons(HttpServletRequest request) {
		CompanyFacade companyFacade = getFacade(request);
		Collection<Coupon> allCoupons = null;
		try {
			allCoupons = companyFacade.getAllCoupons();
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all coupons for company: " + company.getName());
		}
		return allCoupons;
	}

	/**
	 * @param couponType
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Company/getAllCouponsByType/{couponType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllCouponsbyType(@PathVariable("couponType") CouponType couponType,
			HttpServletRequest request) {
		CompanyFacade companyFacade = getFacade(request);
		Collection<Coupon> getAllCouponsByType = null;
		try {
			getAllCouponsByType = companyFacade.getAllCouponsByType(couponType);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all coupons type: " + couponType + ", for company: " + company.getName());
		}
		return getAllCouponsByType;
	}

	/**
	 * @param date
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Company/getAllCouponsByMaxDate/{date}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllCouponsByDate(@PathVariable("date") String date, HttpServletRequest request) {
		CompanyFacade companyFacade = getFacade(request);
		Collection<Coupon> getAllCouponsByDate = null;
		// String date = null;
		try {
			getAllCouponsByDate = companyFacade.getAllCouponsByMaxDate(date);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all coupons by date: " + date + ", for company: " + company.getName());
		}
		return getAllCouponsByDate;
	}

	/**
	 * @param price
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Company/getAllCouponsByMaxPrice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllCouponsByPrice(@PathVariable("price") double price, HttpServletRequest request) {
		CompanyFacade companyFacade = getFacade(request);
		Collection<Coupon> getAllCouponsByPrice = null;
		// double price = 0;
		try {
			getAllCouponsByPrice = companyFacade.getAllCouponsByMaxPrice(price);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all coupons by price: " + price + ", for company: " + company.getName());
		}
		return getAllCouponsByPrice;
	}

	/**
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/Company/logout", method = RequestMethod.POST)
	public void logout(HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession(false);
		if (request.isRequestedSessionIdValid() && session != null) {
			session.invalidate();
		}
		handleLogOutResponse(request, response);
	}

	/**
	 * @param request
	 * @param response
	 */
	private void handleLogOutResponse(HttpServletRequest request, HttpServletResponse response) {
		Cookie[] cookies = request.getCookies();
		for (Cookie cookie : cookies) {
			cookie.setMaxAge(0);
			cookie.setValue(null);
			cookie.setPath("/");
			response.addCookie(cookie);
		}
	}
}
