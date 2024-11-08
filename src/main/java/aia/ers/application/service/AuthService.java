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

    /**
     *
     * @desc 권한코드 리스트 데이터 조회 - VO
     * @param Auth params
     * @return List<Auth>
     */
    List<Auth> selectAuthCodeList(Auth params);

    /**
     *
     * @desc 권한코드 리스트 데이터 입력,수정,삭제
     * @param List<Auth> authList
     * @return
     */
    void saveAuthCodeList(List<Auth> authCodeList);

    /**
     *
     * @desc 권한그룹별메뉴조회
     * @param Auth params
     * @return List<Auth>
     */
    List<Auth> selectAuthMenuList(Auth params);

    /**
     *
     * @desc 권한별프로그램관리 입력,삭제
     * @param List<Auth> authMenuList
     * @return
     */
    void saveAuthMenuList(List<Auth> authMenuList);
}