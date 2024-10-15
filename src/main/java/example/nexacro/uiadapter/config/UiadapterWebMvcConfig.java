package example.nexacro.uiadapter.config;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.web.servlet.DispatcherServlet;
import jakarta.servlet.MultipartConfigElement;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRegistration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcRegistrations;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.stereotype.Component;
import org.springframework.util.unit.DataSize;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.context.support.GenericWebApplicationContext;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
//import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.multipart.support.MultipartFilter;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import com.nexacro.uiadapter.boot.core.context.ApplicationContextProvider;
import com.nexacro.uiadapter.boot.core.resolve.NexacroHandlerMethodReturnValueHandler;
import com.nexacro.uiadapter.boot.core.resolve.NexacroMappingExceptionResolver;
import com.nexacro.uiadapter.boot.core.resolve.NexacroMethodArgumentResolver;
import com.nexacro.uiadapter.boot.core.resolve.NexacroRequestMappingHandlerAdapter;
import com.nexacro.uiadapter.boot.core.util.EtcPropertiesBase;
import com.nexacro.uiadapter.boot.core.view.NexacroFileView;
import com.nexacro.uiadapter.boot.core.view.NexacroView;
import com.nexacro.uiadapter.boot.dao.DbVendorsProvider;
import com.nexacro.uiadapter.boot.dao.Dbms;
import com.nexacro.uiadapter.boot.dao.dbms.Hsql;

import example.nexacro.uiadapter.util.EtcProperty;
import example.nexacro.uiadapter.util.MessageUtils;

import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.java.xeni.services.GridExportImportServlet;

@Configuration
public class UiadapterWebMvcConfig  implements WebMvcConfigurer, WebMvcRegistrations {

	private Logger logger = LoggerFactory.getLogger(UiadapterWebMvcConfig.class);
    
    /**
     * Spring의 <ApplicationContextProvider>를 제공한다.
     * @return
     */
    @Bean
    public ApplicationContextProvider applicationContextProvider() {
        return new ApplicationContextProvider();
    }
    
    /********************************************************************************
	<!-- LocaleResolver 선언 시작 -->
    <!-- multi language message Resolver request가 가지고 있는 session으로 부터 locale 정보를 가져온다 -->
    <bean id="localeResolver" class="org.springframework.web.servlet.i18n.SessionLocaleResolver" />
	<!-- LocaleResolver 선언 끝 -->

	// org.springframework.boot:spring-boot-starter-validation 설정시 포함됨.
    <bean id="validator" class="org.springframework.validation.beanvalidation.LocalValidatorFactoryBean">
        <property name="validationMessageSource" ref="messageSource" />
    </bean>

	<bean id="messageSource" class="org.springframework.context.support.ReloadableResourceBundleMessageSource">
		<property name="basenames">
			<list>
				<value>classpath:/messages/message-common</value>
			</list>
		</property>
		<property name="cacheSeconds">
			<value>60</value>
		</property>
	</bean>    
     *******************************************************************************/
    @Bean
    public SessionLocaleResolver localeResolver() {
    	SessionLocaleResolver localeResolver = new SessionLocaleResolver();
    	//localeResolver.setDefaultLocale(Locale.KOREA);
        return localeResolver;
    }
    
    @Bean
    public ReloadableResourceBundleMessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("classpath:/messages/message-common");
        messageSource.setDefaultEncoding("UTF-8");
        messageSource.setCacheSeconds(10 * 60); // 리로드 시간
        return messageSource;
    }
    @Bean(name="messageSourceAccessor")
    public MessageSourceAccessor messageSourceAccessor() {
        return new MessageSourceAccessor(messageSource());
    }
    
    /**
     * @ Usage : @AutoWired message; 한 후 message.getMessage("error.common"));
     * @return MessageUtils
     */
    @Bean(name="message")
    public MessageUtils message() {
        MessageUtils messageUtils = new MessageUtils();
        messageUtils.setMessageSourceAccessor(messageSourceAccessor());
        return messageUtils;
    }

    /**
     * MultipartFilter 지정
     * 		Spring boot 에서 multipartResolver를 처리하도록 Filter 지정
     */
    @Bean
    public MultipartFilter multipartFilter() {
        MultipartFilter multipartFilter = new MultipartFilter();
        multipartFilter.setMultipartResolverBeanName("multipartResolver");
        return multipartFilter;
    }
   
    /**
     * 엑셀처리 <서블릿> 등록
     * Windows : %USER%\AppData\Local\Temp
	 * Linux : /tmp
     * @return
     */
    @Bean
    public ServletRegistrationBean<GridExportImportServlet> gridExportImportServletBean() {
        ServletRegistrationBean<GridExportImportServlet> bean = new ServletRegistrationBean<GridExportImportServlet>(new GridExportImportServlet(), "/XExportImport.do");
        bean.setLoadOnStartup(1);
        MultipartConfigElement multipartConfigElement = new MultipartConfigElement(System.getProperty("java.io.tmpdir"), 10000000, 10000000 * 2, 10000000 / 2);
        bean.setMultipartConfig(multipartConfigElement);
        return bean;
    }
    
    /**
     * 넥사크로플랫폼 <RequestMappingHandlerAdapter> 구현체 등록
     */
    @Override
    public RequestMappingHandlerAdapter getRequestMappingHandlerAdapter() {
        return new NexacroRequestMappingHandlerAdapter();
    }
    
    /**
     * 넥사크로플랫폼 <ArgumentResolver> 등록
     */
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        
        NexacroMethodArgumentResolver nexacroResolver = new NexacroMethodArgumentResolver();
        resolvers.add(nexacroResolver);
        
        WebMvcConfigurer.super.addArgumentResolvers(resolvers);
    }
    
    /**
     * 넥사크로플랫폼 <ReturnValueHandler> 등록
     */
    @Override
    public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> handlers) {
        
        NexacroHandlerMethodReturnValueHandler returnValueHandler = new NexacroHandlerMethodReturnValueHandler();
        
        NexacroFileView nexacroFileView = new NexacroFileView();        
        NexacroView     nexacroView     = new NexacroView();
        nexacroView.setDefaultContentType(PlatformType.CONTENT_TYPE_XML);
        nexacroView.setDefaultCharset("UTF-8");
        
        returnValueHandler.setView(nexacroView);
        returnValueHandler.setFileView(nexacroFileView);
        
        handlers.add(returnValueHandler);
        
        WebMvcConfigurer.super.addReturnValueHandlers(handlers);
    }
    
    /**
     * 넥사크로플랫폼 에러 처리 <ExceptionResolver> 등록
     */
    @Override
    public void configureHandlerExceptionResolvers(List<HandlerExceptionResolver> resolvers) {
        
        NexacroView nexacroView = new NexacroView();
        nexacroView.setDefaultContentType(PlatformType.CONTENT_TYPE_XML);
        nexacroView.setDefaultCharset("UTF-8");
        
        NexacroMappingExceptionResolver nexacroException = new NexacroMappingExceptionResolver();
        
        nexacroException.setView(nexacroView);
        nexacroException.setShouldLogStackTrace(true);
        nexacroException.setShouldSendStackTrace(true);
        nexacroException.setDefaultErrorMsg("fail.common.msg");
        nexacroException.setOrder(1);
        resolvers.add(nexacroException);
        
        WebMvcConfigurer.super.configureHandlerExceptionResolvers(resolvers);
    }
    
    /**
     *  excel import/export [web.xml]설정 등록
     */
    @Bean
    public ServletContextInitializer initializer() {
        return new ServletContextInitializer() {

            /**
             * 넥사크로플랫폼 엑셀 처리 모듈:nexacro-xeni.jar를 이용한 엑셀 처리 설정 
             */
            @Override
            public void onStartup(ServletContext servletContext) throws ServletException {
                servletContext.setInitParameter("export-path"       , "/excel");  //엑셀 export 임시폴더 생성 기준 디렉터리
                servletContext.setInitParameter("import-path"       , "/excel");  //엑셀 import 임시폴더 생성 기준 디렉터리
                servletContext.setInitParameter("monitor-enabled"   , "true");    //임시파일 삭제를 위한 모니터링 여부
                servletContext.setInitParameter("monitor-cycle-time", "30");      //임시파일 삭제를 위한 모니터링 주기( default:분)
                servletContext.setInitParameter("file-storage-time" , "10");      //임시파일 생성 디렉터리 모니터링 주기 (default:분)
            }
        };
    }
    
    
    /**
     * Dbms별 meta정보 조회를 위한 bean을 <DbVendorsProvider>에 등록
     * mybatis 사용 시 데이터가 없는 경우 null 반환
     * nexacro 컬럼정보 생성을 위해 metadata 정보 조회 후 컬럼 생성 처리
     * 
     * sql-mapper-config.xml 에 정의된 plugin에서 처리
     * <plugins>    
     *     <plugin interceptor="com.nexacro.uiadapter.boot.dao.mybatis.NexacroMybatisMetaDataProvider" />
     *     <plugin interceptor="com.nexacro.uiadapter.boot.dao.mybatis.NexacroMybatisResultSetHandler" />
     * </plugins>
     * 
     * @return
     */
    @Bean
    public DbVendorsProvider dbmsProvider() {
        
        DbVendorsProvider dbmsProvider = new DbVendorsProvider();
        
        Map<String,Dbms> dbvendors = new HashMap<String,Dbms>();
        
        //프로젝트에서 사용하는 데이터베이스만 사용.
        dbvendors.put("HSQL Database Engine", new Hsql());
        //dbvendors.put("Microsoft SQL Server", new Mssql());
        //dbvendors.put("Oracle", new Oracle());
        //dbvendors.put("MySQL", new Mysql());
        
        
        /**
         *  <bean id="hsqlDbms"   class="com.nexacro.uiadapter.boot.dao.dbms.Hsql" />
         *  <bean id="oracleDbms" class="com.nexacro.uiadapter.boot.dao.dbms.Oracle" />
            <bean id="mssqlDbms"  class="com.nexacro.uiadapter.boot.dao.dbms.Mssql" />
            <bean id="mysqlDbms"  class="com.nexacro.uiadapter.boot.dao.dbms.Mysql" />
            <bean id="tiberoDbms" class="com.nexacro.uiadapter.boot.dao.dbms.Tibero" />
            
            <bean id="dbmsProvider" class="com.nexacro.uiadapter.boot.dao.DbVendorsProvider">
                <property name="dbvendors">
                    <map>
                         <entry key="HSQL Database Engine" value-ref="hsqlDbms"/>
                         <entry key="Microsoft SQL Server" value-ref="mssqlDbms"/>
                        <entry key="Oracle"               value-ref="oracleDbms"/>
                        <entry key="MySQL"                value-ref="mysqlDbms"/>
                    </map>
                </property>
            </bean>
         */
                
        dbmsProvider.setDbvendors(dbvendors);
        
        return dbmsProvider;
    }
    
    /*
    // camel(whoAreYou), kebab(who-are-you), snake(who_are_you),upper(WHO_ARE_YOU)
	@Bean(name="etcProperty")
	public EtcPropertiesBase etcProperty(@Value("${nexacro.client-column-case}") String clientColumnCase
										, @Value("${nexacro.db-column-case}") String dbColumnCase
										, @Value("${nexacro.who-are-you}") String whoAreYou
										, @Value("${nexacro.use-request-charset}") String userReqeustCharset
										, @Value("${nexacro.use-request-contenttype}") String useRequestContenttype
										, @Value("${nexacro.trim-paramdataset}") String trimParamdataset
										, @Value("${nexacro.trim-paramvariable}") String trimParamvariable
										, @Value("${nexacro.replace-all-empty-variable}") String replaceAllemptyVariable) {
		EtcPropertiesBase etc = new EtcPropertiesBase();
		etc.addEtcProperty("nexacro.client-column-case", clientColumnCase);
		etc.addEtcProperty("nexacro.db-column-case", dbColumnCase);
		etc.addEtcProperty("nexacro.who-are-you", whoAreYou);
		etc.addEtcProperty("nexacro.use-request-charset", userReqeustCharset);
		etc.addEtcProperty("nexacro.use-request-contenttype", useRequestContenttype);
		etc.addEtcProperty("nexacro.trim-paramdataset", trimParamdataset);
		etc.addEtcProperty("nexacro.trim-paramvariable", trimParamvariable);
		etc.addEtcProperty("nexacro.replace-all-empty-variable", replaceAllemptyVariable);
		return etc;
	}
	*/
}
