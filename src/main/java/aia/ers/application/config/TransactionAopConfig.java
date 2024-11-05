package aia.ers.application.config;

import lombok.RequiredArgsConstructor;
import org.springframework.aop.Advisor;
import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.interceptor.MatchAlwaysTransactionAttributeSource;
import org.springframework.transaction.interceptor.RollbackRuleAttribute;
import org.springframework.transaction.interceptor.RuleBasedTransactionAttribute;
import org.springframework.transaction.interceptor.TransactionInterceptor;

import java.util.Collections;
import java.util.List;

/*********************************************************************
 * 
 * @author tobesoft
 *
 *********************************************************************/
@Configuration
@RequiredArgsConstructor
public class TransactionAopConfig {
    /**
     * datasource가 주입되어있음
     */
    private PlatformTransactionManager transactionManager;

    private final String EXECUTION ="execution(* example.nexacro..impl.*(..))";

	/*******************************************************************************************
		<tx:advice id="txAdvice" transaction-manager="txManager">
			<tx:attributes>
				<tx:method name="*" rollback-for="Exception"/>
			</tx:attributes>
		</tx:advice>
		<aop:config>
			<aop:pointcut id="requiredTx" expression="execution(* example.nexacro..impl.*(..))"/>
			<aop:advisor advice-ref="txAdvice" pointcut-ref="requiredTx" />
		</aop:config>
	 * @return
	 ********************************************************************************************/
    @Bean
    public TransactionInterceptor transactionAdvice(){
        List<RollbackRuleAttribute> rollbackRules = Collections.singletonList(new RollbackRuleAttribute(Exception.class));

        RuleBasedTransactionAttribute transactionAttribute = new RuleBasedTransactionAttribute();
        transactionAttribute.setRollbackRules(rollbackRules);
        transactionAttribute.setName("*");

        MatchAlwaysTransactionAttributeSource attributeSource = new MatchAlwaysTransactionAttributeSource();
        attributeSource.setTransactionAttribute(transactionAttribute);

        TransactionInterceptor interceptor = new TransactionInterceptor();
        interceptor.setTransactionManager(transactionManager);
        interceptor.setTransactionAttributeSource(attributeSource);

        return interceptor;

    }

    @Bean
    public Advisor transactionAdvisor(){
        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        pointcut.setExpression(EXECUTION);

        return new DefaultPointcutAdvisor(pointcut, transactionAdvice());
    }
}
