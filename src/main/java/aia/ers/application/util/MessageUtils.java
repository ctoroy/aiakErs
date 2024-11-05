package aia.ers.application.util;

import java.util.Locale;
import org.springframework.context.support.MessageSourceAccessor;

/*
 * @title       MessageUtils
 * @desc        메세지 처리
 * @example     
 *              log.debug("error.common: "+MessageUtils.getMessage("error.common"));
 *              log.debug("error.minlength: "+MessageUtils.getMessage("error.minlength", new String[] {"테스트글자", "2"}));
 */
public class MessageUtils
{
    private static MessageSourceAccessor msAcc = null;
    
    public void setMessageSourceAccessor(MessageSourceAccessor msAcc) {
        MessageUtils.msAcc = msAcc;
    }
     
    /**
     * 언어팩 언어 가져오기
     *
     * @param code 언어팩 코드
     * @return String
     */
    public static String getMessage(String code) {
        return msAcc.getMessage(code, Locale.getDefault());
    }
     
    /**
     * 언어팩 언어 가져오기
     *
     * @param code 언어팩 코드
     * @param strs 동적 문자
     * @return String
     */
    public static String getMessage(String code, Object[] objs) {
        return msAcc.getMessage(code, objs, Locale.getDefault());
    }
}
