package aia.ers.application.service;

import aia.ers.application.pojo.Auth;

import java.util.List;

/**
 * <pre>
 * @title   권한
 * @desc
 * @package aia.ers.application.service
 * <pre>
 * 
 * @author  강성호
 * @since   2024. 11. 06.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜						변경자		내용
 * ------------------------------------------------
 * 2024. 11. 06.	강성호		최초작성
 */
public interface AuthService {

    List<Auth> selectAuthCodeList(Auth auth);
    void saveAuthCodeList(List<Auth> authList);
}