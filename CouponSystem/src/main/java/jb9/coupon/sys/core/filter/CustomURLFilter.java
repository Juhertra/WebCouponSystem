package jb9.coupon.sys.core.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CustomURLFilter implements Filter{
	
	private static final Logger logger = LoggerFactory.getLogger(CustomURLFilter.class);
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		logger.info("######## Initializing CustomURLFilter filter ########");
	}

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
			throws IOException, ServletException {
		
		HttpServletRequest request = (HttpServletRequest) servletRequest;
		HttpServletResponse response = (HttpServletResponse) servletResponse;
		
		logger.info("This filter is only called when request is mapped for /admin /company /customer resources");
		System.out.println("I am from filter");
		System.out.println(request.getSession().getAttribute("facade"));
		if(request.getSession().getAttribute("facade") == null) {
			response.sendRedirect("https://localhost:8443/login.html");
		}
		filterChain.doFilter(request, response);
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

}