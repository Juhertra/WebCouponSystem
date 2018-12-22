package jb9.coupon.sys.core.filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfiguration {

	@Bean
	public FilterRegistrationBean<AdminFilter> filtreFilterRegistrationBeanAdmin(){
		FilterRegistrationBean<AdminFilter> registrationBean = new FilterRegistrationBean<AdminFilter>();
		AdminFilter adminFilter = new AdminFilter();
		
		registrationBean.setFilter(adminFilter);
		registrationBean.addUrlPatterns("/Admin/*");
		return registrationBean;
	}
	
	@Bean
	public FilterRegistrationBean<CompanyFilter> filtreFilterRegistrationBeanCompany(){
		FilterRegistrationBean<CompanyFilter> registrationBean = new FilterRegistrationBean<CompanyFilter>();
		CompanyFilter companyFilter = new CompanyFilter();
		
		registrationBean.setFilter(companyFilter);
		registrationBean.addUrlPatterns("/Company/*");
		return registrationBean;
	}
	
	@Bean
	public FilterRegistrationBean<CustomerFilter> filtreFilterRegistrationBeanCustomer(){
		FilterRegistrationBean<CustomerFilter> registrationBean = new FilterRegistrationBean<CustomerFilter>();
		CustomerFilter customerFilter= new CustomerFilter();
		
		registrationBean.setFilter(customerFilter);
		registrationBean.addUrlPatterns("/Customer/*");
		return registrationBean;
	}
}
