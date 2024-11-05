package aia.ers.application.common;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

/**
 * @author roy
 */
@Slf4j
@Component
public class LoggingFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        ContentCachingRequestWrapper requestWrapper = new ContentCachingRequestWrapper(request);
        ContentCachingResponseWrapper responseWrapper = new ContentCachingResponseWrapper(response);
        if( isAsyncDispatch(request) ) {
            filterChain.doFilter(request, response);
        }else {
            filterChain.doFilter(requestWrapper, responseWrapper);

            log.info("=======URI: [{}], METHOD: [{}]=======", request.getRequestURI(), request.getMethod());
            log.debug("Headers: {}", getHeaders(request));
            log.debug("QueryString: {}", getQueryParameter(request));
            log.debug("Http Status: {}", response.getStatus());
            log.debug("Request Body: {}", contentBody(requestWrapper.getContentAsByteArray()));
            log.debug("Response Body: {}", contentBody(responseWrapper.getContentAsByteArray()));

            responseWrapper.copyBodyToResponse();
        }
    }

    private Map<String, String> getHeaders(HttpServletRequest request) {												
        Map<String, String> headerMap = new HashMap<>();

        Enumeration<String> headerArray = request.getHeaderNames();
        while (headerArray.hasMoreElements()) {
            String headerName = headerArray.nextElement();
            headerMap.put(headerName, request.getHeader(headerName));
        }
        return headerMap;
    }

    private Map<String, String> getQueryParameter(HttpServletRequest request) {
        Map<String, String> queryMap = new HashMap<>();
        request.getParameterMap()
                .forEach((key, value) -> queryMap.put(key, String.join("", value)));
        return queryMap;
    }

    @SuppressWarnings("finally")
	private String contentBody(final byte[] contents) {
        StringBuilder sb = new StringBuilder("\n");
        try {
        	BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(contents)));
        	bufferedReader.lines().forEach(str -> sb.append(str).append("\n"));
	 	}finally {
			sb.deleteCharAt(sb.length() - 1);
	 		return sb.toString();
	 	} 
    }
}
