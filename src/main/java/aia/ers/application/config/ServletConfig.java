package aia.ers.application.config;

import aia.ers.application.common.LoggingFilter;
import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author roy
 */
@Configuration
@RequiredArgsConstructor
public class ServletConfig {

    private final LoggingFilter loggingFilter;

    @Bean
    public FilterRegistrationBean<Filter> filterRegistrationBean() {
        FilterRegistrationBean<Filter> filter = new FilterRegistrationBean<>();
        filter.setFilter(this.loggingFilter);
        filter.addUrlPatterns("/*");
        return filter;
    }
}
